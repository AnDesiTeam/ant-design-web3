import { metadata_Trust } from '@ant-design/web3-assets';
import type { WalletMetadata } from '@ant-design/web3-common';
import type { CreateConnectorFn } from 'wagmi';
import { injected, type InjectedParameters } from 'wagmi/connectors';

export const turstWallet = (
  params: Omit<InjectedParameters, 'target'> & Partial<WalletMetadata> = {},
): CreateConnectorFn => {
  const { shimDisconnect, unstable_shimAsyncInject, ...metadataParams } = params;
  const metadata = { ...metadataParams, ...metadata_Trust };
  return injected({
    target: {
      ...metadata,
      id: metadata.key || 'injected',
      name: metadata.name,
      icon: metadata.icon,
      provider: window.ethereum,
    } as any,
    shimDisconnect,
    unstable_shimAsyncInject,
  });
};
