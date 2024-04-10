import React from 'react';
import { ConnectOptions, defaultLocale } from '@ant-design/web3-common';

import type { IntlType } from '../../hooks/useIntl';
import type { PanelRoute, Wallet } from '../interface';

export type ConnectModalContext = {
  prefixCls: string;
  addressPrefix?: string | false;
  selectedWallet?: Wallet;
  updateSelectedWallet: (wallet?: Wallet, connectOptions?: ConnectOptions) => void;
  panelRoute: PanelRoute;
  updatePanelRoute: (route: PanelRoute, clear?: boolean) => void;
  panelRouteBack: () => void;
  canBack: boolean;
  localeMessage: IntlType<'ConnectModal'>['messages'];
  getMessage: IntlType<'ConnectModal'>['getMessage'];
};

export const connectModalContext = React.createContext<ConnectModalContext>({
  prefixCls: 'ant-web3-connect-modal',
  addressPrefix: undefined,
  selectedWallet: undefined,
  updateSelectedWallet: () => {},
  panelRoute: 'init',
  updatePanelRoute: () => {},
  panelRouteBack: () => {},
  canBack: false,
  localeMessage: defaultLocale.ConnectModal,
  getMessage: () => '',
});

export const ConnectModalContextProvider = connectModalContext.Provider;
