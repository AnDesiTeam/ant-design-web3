import { ConnectButton, Connector } from '@ant-design/web3';
import {
  MetaMask,
  Polygon,
  WagmiWeb3ConfigProvider,
  WalletConnect,
  X1Testnet,
} from '@ant-design/web3-wagmi';
import { createConfig, http } from 'wagmi';
import { mainnet, polygon, type Chain } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

export const x1Testnet: Chain = {
  id: X1Testnet.id,
  name: X1Testnet.name,
  nativeCurrency: { name: 'OKB', symbol: 'OKB', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://testrpc.x1.tech'],
    },
  },
  blockExplorers: {
    default: {
      name: 'X1TestnetScan',
      url: 'https://www.okx.com/explorer/x1-test',
    },
  },
};

const config = createConfig({
  chains: [mainnet, polygon, x1Testnet],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [x1Testnet.id]: http(),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
    walletConnect({
      showQrModal: false,
      projectId: YOUR_WALLET_CONNET_PROJECT_ID,
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider
      wallets={[MetaMask(), WalletConnect()]}
      chains={[Polygon, X1Testnet]}
      config={config}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
