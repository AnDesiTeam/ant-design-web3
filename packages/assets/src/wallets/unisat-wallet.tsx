import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, UnisatColorful } from '@ant-design/web3-icons';

export const metadata_Unisat: WalletMetadata = {
  icon: <UnisatColorful />,
  name: 'Unisat',
  remark: 'Unisat Wallet',
  app: {
    link: 'https://unisat.io/download',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/unisat/ppbibelpcjmhbdihakflkdcoccbgbkpo',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
