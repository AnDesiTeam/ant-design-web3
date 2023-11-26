import type { MenuItemType } from '@ant-design/web3';
import { ConnectButton } from '@ant-design/web3';
import { CopyOutlined, LogoutOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const App: React.FC = () => {
  const menuItems: MenuItemType[] = [
    {
      label: 'Menu Item 1',
      key: '1',
      onClick: () => {
        console.log('Menu Item 1 clicked');
      },
    },
    {
      label: 'Menu Item 2',
      key: '2',
      onClick: () => {
        console.log('Menu Item 2 clicked');
      },
    },
    {
      label: 'Copy Address',
      key: '3',
      role: 'copyAddress',
      onClick: () => {
        console.log('Copy Address');
      },
      icon: <CopyOutlined />,
    },
    {
      label: 'Disconnect',
      key: '4',
      role: 'disconnect',
      onClick: () => {
        console.log('Disconnect');
      },
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <Space>
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        name="Show menu after click"
        avatar={{
          src: 'https://metamask.io/images/metamask-logo.png',
        }}
        menuItems={menuItems}
        clickActionType="showMenu"
        connected
      />
      <ConnectButton
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        name="Show profile modal after click"
        avatar={{
          src: 'https://metamask.io/images/metamask-logo.png',
        }}
        menuItems={menuItems}
        clickActionType="showProfileModal"
        connected
      />
    </Space>
  );
};

export default App;
