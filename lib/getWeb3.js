import Web3 from "web3";

const resolveWeb3 = (resolve) => {
  const alreadyInjected = typeof window.ethereum !== "undefined"; // i.e. Mist/Metamask
  const localProvider = process.env.NEXT_PUBLIC_WEB3_URL; //Ganache address: http://127.0.0.1:8545 or http://127.0.0.1:7545 
  let web3;                                      //Truffle develop address: http://127.0.0.1:9545
  if (alreadyInjected) {
    console.log("Injected Web3 detected.");
    //Use the browser injected Ethereum provider
    web3 = new Web3(window.ethereum);
  } else {
    console.log("No web3 instance injected, using local web3.");
    const provider = new Web3.providers.HttpProvider(localProvider);
    web3 = new Web3(provider);
  }

  resolve(web3);
};

export default function getWeb3() {
  return new Promise((resolve) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", () => {
      resolveWeb3(resolve);
    });
    // If document has loaded already, try to get Web3 immediately.
    if (document.readyState === "complete") {
      resolveWeb3(resolve);
    }
  });
}
