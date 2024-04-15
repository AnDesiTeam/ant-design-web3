import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, XverseColorful } from '@ant-design/web3-icons';

export const metadata_Xverse: WalletMetadata = {
  // TODO: update icon
  icon: <XverseColorful />,
  name: 'Xverse',
  remark: 'Xverse Wallet',
  app: {
    link: 'https://www.xverse.app/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
