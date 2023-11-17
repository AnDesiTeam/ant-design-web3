import React from 'react';
import { Button, Dropdown } from 'antd';
import { Address } from '../address';
import type { ConnectButtonProps } from './interface';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const {
    address,
    connected,
    onConnectClick,
    onDisconnectClick,
    chains,
    currentChain,
    onSwitchChain,
  } = props;

  const buttonProps = {
    style: props.style,
    className: props.className,
    size: props.size,
    type: props.type,
    ghost: props.ghost,
    onClick: () => {
      if (connected) {
        onDisconnectClick?.();
      } else {
        onConnectClick?.();
      }
    },
    children: connected ? <Address ellipsis address={address} /> : 'Connect Wallet',
    ...props,
  };

  if (chains && chains.length > 1) {
    return (
      <Dropdown.Button
        icon={currentChain?.icon}
        menu={{
          items: chains.map((item) => {
            return {
              onClick: () => {
                onSwitchChain?.(item.id);
              },
              icon: item.icon,
              label: item.name,
              key: item.id,
            };
          }),
        }}
        {...buttonProps}
      />
    );
  }

  return <Button {...buttonProps} />;
};

ConnectButton.displayName = 'ConnectButton';
