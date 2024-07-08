import { isWalletInfoCurrentlyInjected } from '@tonconnect/sdk';

import type { TonBasicWallet, WalletFactory } from './type';

export const TonWalletFactory = (metadata: TonBasicWallet): WalletFactory => {
  const isReady = isWalletInfoCurrentlyInjected(metadata);

  return {
    create: () => {
      return {
        ...metadata,
        name: metadata.appName,
        remark: metadata.appName,
        icon: metadata.icon ?? metadata.imageUrl,
        hasWalletReady: () => Promise.resolve(isReady),
        hasExtensionInstalled: () => Promise.resolve(isReady),
      };
    },
  };
};
