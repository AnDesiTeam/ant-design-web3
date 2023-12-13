import React, { useContext, useMemo, useState } from 'react';
import type { ButtonProps } from 'antd';
import { Button, ConfigProvider, Dropdown, Space, message } from 'antd';
import classNames from 'classnames';
import { Address } from '../address';
import type { ConnectButtonProps, ConnectButtonTooltipProps } from './interface';
import { ConnectButtonTooltip } from './tooltip';
import { ChainSelect } from './chain-select';
import { ProfileModal } from './profile-modal';
import { useStyle } from './style';
import { fillWith0x, writeCopyText } from '../utils';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { CryptoPrice } from '../crypto-price';
import { CopyOutlined, LoginOutlined } from '@ant-design/icons';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const {
    onConnectClick,
    onDisconnectClick,
    availableChains,
    onSwitchChain,
    tooltip,
    chain,
    account,
    avatar,
    profileModal = true,
    onMenuItemClick,
    actionsMenu = false,
    loading,
    onClick,
    banlance,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button');
  const [profileOpen, setProfileOpen] = useState(false);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const [messageApi, contextHolder] = message.useMessage();
  const [showMenu, setShowMenu] = useState(false);
  let buttonText: React.ReactNode = 'Connect Wallet';
  if (account) {
    buttonText =
      account?.name && !banlance ? (
        account?.name
      ) : (
        <Address tooltip={false} ellipsis address={account.address}>
          {banlance ? <CryptoPrice {...banlance} /> : undefined}
        </Address>
      );
  }

  const buttonProps: ButtonProps = {
    style: props.style,
    className: classNames(props.className, hashId, prefixCls),
    size: props.size,
    type: props.type,
    ghost: props.ghost,
    loading,
    onClick: (e) => {
      setShowMenu(false);
      if (account && !profileOpen && profileModal) {
        setProfileOpen(true);
      } else {
        onConnectClick?.();
      }
      onClick?.(e);
    },
    ...restProps,
  };

  const renderChainSelect = () => {
    if (availableChains && availableChains.length > 1) {
      return (
        <ChainSelect
          hashId={hashId}
          onSwitchChain={onSwitchChain}
          currentChain={chain}
          chains={availableChains}
        />
      );
    }
    return null;
  };

  const chainSelect = renderChainSelect();

  const buttonInnerText = (
    <div className={classNames(`${prefixCls}-text`, hashId)}>{buttonText}</div>
  );

  const buttonContent = chainSelect ? (
    <Space.Compact>
      {chainSelect}
      <Button {...buttonProps}>{buttonInnerText}</Button>
    </Space.Compact>
  ) : (
    <Button {...buttonProps}>{buttonInnerText}</Button>
  );

  const profileModalContent = (
    <ProfileModal
      open={profileOpen}
      __hashId__={hashId}
      onDisconnect={() => {
        setProfileOpen(false);
        onDisconnectClick?.();
      }}
      onClose={() => {
        setProfileOpen(false);
      }}
      address={account?.address}
      name={account?.name}
      avatar={
        avatar ?? {
          src: chain?.icon,
        }
      }
      balance={banlance}
      modalProps={typeof profileModal === 'object' ? profileModal : undefined}
    />
  );

  let content = buttonContent;

  const defaultMenuItems: MenuItemType[] = useMemo(
    () => [
      {
        label: 'Copy Address',
        key: 'copyAddress',
        onClick: () => {
          setProfileOpen(false);
          if (account?.address) {
            writeCopyText(account?.address).then(() => {
              messageApi.success('Address Copied!');
            });
          }
        },
        icon: <CopyOutlined />,
      },
      {
        label: 'Disconnect',
        key: 'disconnect',
        onClick: () => {
          setProfileOpen(false);
          onDisconnectClick?.();
        },
        icon: <LoginOutlined />,
      },
    ],
    [account?.address, messageApi, onDisconnectClick],
  );

  const mergedMenuItems = useMemo<MenuItemType[]>(() => {
    if (!actionsMenu) {
      return [];
    }

    if (typeof actionsMenu === 'boolean') {
      return account ? defaultMenuItems : [];
    }

    if (actionsMenu.items) {
      return actionsMenu.items;
    }

    const combinedItems = account
      ? actionsMenu.extraItems
        ? [...actionsMenu.extraItems, ...(account ? defaultMenuItems : [])]
        : account
        ? defaultMenuItems
        : []
      : actionsMenu.extraItems || [];

    return combinedItems;
  }, [actionsMenu, defaultMenuItems, account]);

  if (mergedMenuItems.length > 0) {
    content = (
      <>
        <Dropdown
          open={showMenu}
          onOpenChange={setShowMenu}
          menu={{
            items: mergedMenuItems,
            onClick: onMenuItemClick,
          }}
        >
          {buttonContent}
        </Dropdown>
      </>
    );
  }

  const mergedTooltipCopyable: ConnectButtonTooltipProps['copyable'] =
    typeof tooltip === 'object' ? tooltip.copyable !== false : !!tooltip;

  let tooltipTitle: string = tooltip && account?.address ? fillWith0x(account?.address) : '';
  if (typeof tooltip === 'object' && typeof tooltip.title === 'string') {
    tooltipTitle = tooltip.title;
  }

  const main = (
    <>
      {contextHolder}
      {tooltipTitle ? (
        <ConnectButtonTooltip
          copyable={mergedTooltipCopyable}
          title={tooltipTitle}
          prefixCls={prefixCls}
          __hashId__={hashId}
          {...(typeof tooltip === 'object' ? tooltip : {})}
        >
          {content}
        </ConnectButtonTooltip>
      ) : (
        content
      )}
      {profileModalContent}
    </>
  );

  return wrapSSR(main);
};

ConnectButton.displayName = 'ConnectButton';
