import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Web3Container from "../../lib/Web3Container";

function Accounts({ web3, accounts }) {
  const [value, setValue] = useState("N/A");
  const getEthBalance = async () => {
    const balanceInWei = await web3.eth.getBalance(accounts[0]);
    setValue(web3.utils.toWei(balanceInWei, "ether"));
  };
  return (
    <>
      <Head>
        <title>My Accounts</title>
      </Head>
      <div>
        <h1>My accounts:</h1>
        <pre>{accounts[0]}</pre>
        <div>Eth balance: {value}</div>
        <div onClick={getEthBalance}>Get account ether balance</div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
    </>
  );
}

export default function Index() {
  return (
    <Web3Container
      renderLoading={() => <div>Loading accounts page...</div>}
      render={({ web3, accounts }) => (
        <Accounts web3={web3} accounts={accounts} />
      )}
      name="simple"
    />
  );
}
