import React from 'react';
import {
  type Account,
  type Wallet,
  Web3ConfigProvider,
  requestWeb3Asset,
  fillAddressWith0x,
} from '@ant-design/web3-common';
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import { readContract } from '@wagmi/core';
import { getWalletsByConnectors } from '../wallets';

export interface AntDesignWeb3ConfigProviderProps {
  children?: React.ReactNode;
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { children } = props;
  const { address, isDisconnected } = useAccount();
  const { connectors, connectAsync } = useConnect();
  const { chain } = useNetwork();
  const { disconnectAsync } = useDisconnect();

  const accounts: Account[] = React.useMemo(() => {
    if (!address || isDisconnected) {
      return [];
    }
    return [
      {
        address,
      },
    ];
  }, [address, isDisconnected]);

  const wallets: Wallet[] = React.useMemo(() => {
    return getWalletsByConnectors(connectors);
  }, [connectors]);

  return (
    <Web3ConfigProvider
      accounts={accounts}
      wallets={wallets}
      requestAccounts={async (wallet) => {
        const connector = connectors.find((item) => item.name === wallet);
        const { account } = await connectAsync({
          connector,
        });
        return [
          {
            address: account,
          },
        ];
      }}
      disconnect={async () => {
        await disconnectAsync();
      }}
      getNFTMetadata={async ({ address: contractAddress, tokenId }) => {
        const tokenURI = await readContract({
          address: fillAddressWith0x(contractAddress),
          args: [tokenId],
          chainId: chain?.id,
          abi: [
            {
              name: 'tokenURI',
              inputs: [
                {
                  name: 'tokenId',
                  type: 'uint256',
                },
              ],
              outputs: [{ name: '', type: 'string' }],
              stateMutability: 'view',
              type: 'function',
            },
          ],
          functionName: 'tokenURI',
        });
        const metaInfo = await requestWeb3Asset(tokenURI as string);
        return metaInfo;
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};
