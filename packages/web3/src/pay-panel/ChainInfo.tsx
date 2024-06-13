import React, { useContext } from 'react';
import { Chain } from '@ant-design/web3-common';
import { ConfigProvider } from 'antd';

import { PayPanelContext } from './PayPanelContext';

interface ChainListProps {
  chainId: String;
}

export const ChainInfo: React.FC<ChainListProps> = ({ chainId }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { supportedChains } = useContext(PayPanelContext);

  const prefixCls = getPrefixCls('web3-pay-panel');
  console.log('supportedChains', supportedChains);
  const returnChainInfo = supportedChains.filter((chain) => chain.id === Number(chainId))[0];

  return (
    <div className={`${prefixCls}-chainItem`}>
      <div className={`${prefixCls}-chainInfo`}>
        <span className={`${prefixCls}-icon`}>{returnChainInfo?.icon}</span>
        <span>{returnChainInfo?.name}</span>
      </div>
    </div>
  );
};
