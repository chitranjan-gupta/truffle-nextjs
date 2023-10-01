import React from "react";
import Head from "next/head";
import Link from "next/link";
import Web3Container from "../../lib/Web3Container";

class SimpleStorage extends React.Component {
  state = {
    balance: undefined,
    ethBalance: undefined,
    value: 0,
  };
  storeValue = async () => {
    console.log("Calling set function with the input value of the contract");
    const { accounts, contract } = this.props;
    const value = parseInt(this.state.value);
    await contract.methods.set(value).send({ from: accounts[0] });
    console.log(`Stored ${value} into the contract`);
  };
  getValue = async () => {
    console.log("Calling get function to get the stored value on the contract");
    const { accounts, contract } = this.props;
    const response = await contract.methods.get().call({ from: accounts[0] });
    this.setState({ balance: response.toString() });
  };
  render() {
    const { balance = "N/A" } = this.state;
    return (
      <>
        <Head>
          <title>SimpleStorage</title>
        </Head>
        <div className="flex flex-col p-3">
          <input
            onChange={(event) => this.setState({ value: event.target.value })}
            type="text"
            placeholder="Input the value to store"
          />
          <div className="" onClick={this.storeValue}>
            Set
          </div>
          <div onClick={this.getValue}>Get</div>
          <div>Contract balance: {balance}</div>
          <div>
            <Link href="/accounts">My Accounts</Link>
          </div>
          <div>
            <Link href="/">Home</Link>
          </div>
        </div>
      </>
    );
  }
}

export default function Index() {
  return (
    <Web3Container
      renderLoading={() => <div>Loading Decentralized Application Page...</div>}
      render={({ web3, accounts, contract }) => (
        <SimpleStorage accounts={accounts} contract={contract} web3={web3} />
      )}
      name="simple"
    />
  );
}
