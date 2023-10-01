import React from "react";
import Head from "next/head";
import Link from "next/link";
export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Decentralized Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <Link href="/simple">SimpleStorage</Link>
        <Link href="/accounts">Accounts</Link>
        <Link href="/todo">Todo</Link>
      </div>
    </>
  );
}
