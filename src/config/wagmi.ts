import { connectorsForWallets, wallet } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

// 默认测试连配置
const BinanceChain: Chain = {
    id: 97,
    name: 'Binance Smart Chain Testnet',
    network: 'Binance',
    nativeCurrency: {
      decimals: 18,
      name: 'tBNB',
      symbol: 'tBNB',
    },
    rpcUrls: {
      default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    },
    blockExplorers: {
      default: { name: 'SnowTrace', url: 'https://testnet.bscscan.com' },
    },
    testnet: true,
  }

export const { chains, provider, webSocketProvider } = configureChains(
    [BinanceChain, chain.rinkeby, chain.goerli, chain.mainnet, chain.kovan, chain.ropsten],
    [
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
        // jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) }),
        jsonRpcProvider({
            rpc: (chain) => {
              if (chain.id !== BinanceChain.id) return null
              return { http: chain.rpcUrls.default }
            },
          }),
        publicProvider(),
    ]
);

const needsInjectedWalletFallback =
    typeof window !== "undefined" &&
    window.ethereum &&
    !window.ethereum.isMetaMask &&
    !window.ethereum.isCoinbaseWallet;

const connectors = connectorsForWallets([
    {
        groupName: "Popular",
        wallets: [
            wallet.metaMask({ chains, shimDisconnect: true }),
            wallet.brave({ chains, shimDisconnect: true }),
            wallet.rainbow({ chains }),
            wallet.walletConnect({ chains }),
            wallet.coinbase({ appName: "Coinbase", chains }),
            ...(needsInjectedWalletFallback ? [wallet.injected({ chains, shimDisconnect: true })] : []),
        ],
    },
    {
        groupName: "Other",
        wallets: [wallet.trust({ chains, shimDisconnect: true }), wallet.steak({ chains }), wallet.imToken({ chains })],
    },
]);

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});
