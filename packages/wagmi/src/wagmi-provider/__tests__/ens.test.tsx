import { useProvider } from '@ant-design/web3';
import { Mainnet } from '@ant-design/web3-assets';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { mainnet } from 'wagmi/chains';

import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

vi.mock('@wagmi/core', () => {
  return {
    getEnsName: (_: any, { address }: { address: string }) => {
      if (address === '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('wanderingearth.eth');
          }, 0);
        });
      }
      return null;
    },
    getAccount: () => ({}),
    disconnect: () => {},
  };
});

vi.mock('wagmi', () => {
  return {
    useConfig: () => {
      return {};
    },
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      return {
        chain: mainnet,
        isDisconnected: false,
        address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
      };
    },
    useConnect: () => {
      return {
        connectors: [],
        connectAsync: () => {},
      };
    },
    useDisconnect: () => {
      return {
        disconnectAsync: () => {},
      };
    },
    useSwitchChain: () => {
      return {
        switchChain: () => {},
      };
    },
    useBalance: () => {
      return {};
    },
    useEnsName: ({ address }: { address: string }) => {
      if (address === '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B') {
        return { data: 'wanderingearth.eth' };
      }
      return {};
    },
  };
});

describe('WagmiWeb3ConfigProvider ens', () => {
  it('connect', async () => {
    const CustomConnector = () => {
      const { account } = useProvider();
      console.log(account);
      return (
        <div>
          <div className="custom-text">
            {account ? account?.name || account?.address : 'Connect'}
          </div>
        </div>
      );
    };

    const App = () => (
      <AntDesignWeb3ConfigProvider
        ens
        availableChains={[mainnet]}
        availableConnectors={[]}
        walletFactorys={[MetaMask()]}
        chainAssets={[Mainnet]}
      >
        <CustomConnector />
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);

    await waitFor(() => {
      expect(baseElement.querySelector('.custom-text')?.textContent).toBe('wanderingearth.eth');
    });
  });
});
