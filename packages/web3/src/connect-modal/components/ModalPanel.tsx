import React from 'react';
import type { ConnectOptions } from '@ant-design/web3-common';
import { Button, ConfigProvider } from 'antd';
import classNames from 'classnames';

import useIntl from '../../hooks/useIntl';
import { ConnectModalContextProvider } from '../context';
import useMode from '../hooks/useMode';
import type { ConnectModalProps, PanelRoute, Wallet } from '../interface';
import { useStyle } from '../style';
import { mergeReactNodeProps } from '../utils';
import MainPanel from './MainPanel';
import WalletList from './WalletList';

export type ModalPanelProps = ConnectModalProps;

const ModalPanel: React.FC<ModalPanelProps> = (props) => {
  const {
    title,
    footer,
    walletList,
    guide,
    group = true,
    groupOrder,
    mode,
    onWalletSelected,
    locale,
  } = props;
  const intl = useIntl('ConnectModal', locale);

  const [panelRoute, setPanelRoute] = React.useState<PanelRoute>('init');
  const routeStack = React.useRef<PanelRoute[]>(['init']);
  const [selectedWallet, setSelectedWallet] = React.useState<Wallet>();
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-modal');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const mergedTitle = mergeReactNodeProps(
    title,
    <h2 className={`${prefixCls}-title`}>{intl.messages.title}</h2>,
    (node) => <h2 className={`${prefixCls}-title`}>{node}</h2>,
  );

  const updatePanelRoute = React.useCallback((route: PanelRoute, clear: boolean = false) => {
    if (clear) {
      routeStack.current = ['init'];
    }
    setPanelRoute(route);
    routeStack.current.push(route);
  }, []);

  const updateSelectedWallet = React.useCallback(
    (wallet?: Wallet, connectOptions?: ConnectOptions) => {
      setSelectedWallet(wallet);
      if (wallet && connectOptions) {
        if (connectOptions.connectType === 'qrCode') {
          updatePanelRoute('qrCode', true);
        } else {
          setPanelRoute('init');
        }
        onWalletSelected?.(wallet, connectOptions);
      }
    },
    [onWalletSelected],
  );
  const panelRouteBack = React.useCallback(() => {
    routeStack.current.pop();
    const route = routeStack.current[routeStack.current.length - 1];
    if (route === 'init') {
      updateSelectedWallet(undefined);
    }
    setPanelRoute(route);
  }, [updateSelectedWallet]);

  React.useEffect(() => {
    if (panelRoute === 'getWallet') {
      updateSelectedWallet(undefined);
    }
  }, [panelRoute, updateSelectedWallet]);

  const { isSimple } = useMode(mode);

  return wrapSSR(
    <ConnectModalContextProvider
      value={{
        prefixCls,
        selectedWallet,
        updateSelectedWallet,
        panelRoute,
        updatePanelRoute,
        panelRouteBack,
        canBack: routeStack.current.length > 1,
        localeMessage: intl.messages,
        getMessage: intl.getMessage,
      }}
    >
      <div
        className={classNames(
          `${prefixCls}-body`,
          {
            [`${prefixCls}-body-simple`]: isSimple,
          },
          hashId,
        )}
      >
        {(panelRoute === 'init' || !isSimple) && (
          <div className={classNames(`${prefixCls}-list-panel`)}>
            <div className={`${prefixCls}-header`}>{mergedTitle}</div>
            <div className={`${prefixCls}-list-container`}>
              <WalletList walletList={walletList} group={group} groupOrder={groupOrder} />
            </div>
            {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
            {!footer && isSimple && (
              <div className={`${prefixCls}-simple-footer`}>
                {intl.getMessage(intl.messages.defaultSimpleFooter)}
                <Button
                  type="link"
                  className={`${prefixCls}-simple-footer-right`}
                  href={'https://ethereum.org/en/wallets/'}
                  target="_blank"
                >
                  {intl.getMessage(intl.messages.defaultInfoMoreLinkFooter)}
                </Button>
              </div>
            )}
          </div>
        )}
        {!(panelRoute === 'init' && isSimple) && (
          <MainPanel simple={isSimple} guide={guide} walletList={walletList} />
        )}
      </div>
    </ConnectModalContextProvider>,
  );
};

export default ModalPanel;
