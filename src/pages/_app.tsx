import '../styles/rainbowkit.css';
import "../styles/globals.css";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { WagmiConfig, chain } from "wagmi";

function MyApp({ Component, pageProps }: AppProps) {

    // const [mounted, setMounted] = useState(false);
 
    // useEffect(() => setMounted(true), []);
    // if (!mounted) return null;

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
    );

}

export default MyApp;

