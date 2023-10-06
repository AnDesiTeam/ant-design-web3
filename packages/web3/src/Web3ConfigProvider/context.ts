import React from 'react';
import { Web3ProviderInterface } from '@ant-design/web3-common';

export interface Account {
  address: string;
}

export enum Chains {
  EthereumMainnet = 'https://etherscan.io/address/',
  bitcoin = 'bitcoin:',
}

export interface NFTMetadata {
  name?: string;
  description?: string;
  image?: string;
  dna?: string;
  edition?: number;
  date?: number;
  attributes?: {
    trait_type?: string;
    value?: string;
  }[];
  compiler?: string;
}

export interface Web3ProviderInterface {
  getAccounts: () => Promise<Account[]>;
  getCurrentAccount: () => Promise<Account | undefined>;
  requestAccounts: () => Promise<Account[]>;
  getQrCodeLink: () => Promise<string>;
  getNFTMetadata: (address: string, id: number) => Promise<NFTMetadata>;
  chain?: Chains;
}

export interface Web3ConfigProviderProps {
  provider: Web3ProviderInterface;
}

export interface ConfigConsumerProps {
  provider?: Web3ProviderInterface;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
