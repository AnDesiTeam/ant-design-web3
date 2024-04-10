import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful } from '@ant-design/web3-icons';

export const metadata_Unisat: WalletMetadata = {
  // TODO: update icon
  icon: <ChromeCircleColorful />,
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
