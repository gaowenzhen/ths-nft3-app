import { BasciConnect } from "components/ConnectWallet";
import {ConnectStatus} from "components/contractStatus"
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useMemo } from "react";
import { useAccount } from 'wagmi'

const Home: NextPage = () => {

    console.dir(11122233)

    // const { address,isConnected } = useAccount()
    // useEffect(()=> {
    //     console.dir(isConnected)
    //     console.dir(address)
    // },[])

    return (
        <div>
            <Head>
                <title>Create Wagmi Dapp</title>
                <meta name="description" content="ths-meta-nft-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConnectStatus/>
            <div>
                <BasciConnect></BasciConnect>
            </div>
        </div>
    );

};

export default Home;
