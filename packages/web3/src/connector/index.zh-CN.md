---
nav: 组件
group: 组件
---

# Connector

## 和 wagmi 一起使用

<code src="./demos/wagmi.tsx"></code>

## 支持切换链

<code src="./demos/chains.tsx"></code>

## 显示 ENS

<code src="./demos/name.tsx"></code>

## 使用 web3modal 连接 WallectConnect

<code src="./demos/web3modal.tsx"></code>

## 和 @ant-design/web3-ethereum 一起使用

<code src="./demos/ethereum.tsx"></code>

## API

### ConnectorProps

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 连接控件，通常是 `ConnectButton` | `React.ReactNode` | - | - |
| modalProps | 透传给 `ConnectModal` 的属性 | `ModalProps` | - | - |
| onConnect | 触发连接时的回调 | `() => Promise<viod>` | - | - |
| onDisconnect | 触发断开连接时的回调 | `() => Promise<viod>` | - | - |
| onConnected | 连接成功时的回调 | `(account: Account) => Promise<viod>` | - | - |
| onDisconnected | 断开连接时的回调 | `() => Promise<viod>` | - | - |
| onChainSwitched | 切换网络时的回调 | `(chain: Chain) => Promise<viod>` | - | - |
| wallets | 钱包列表 | `Wallet[]` | - | - |
| accounts | 账户列表 | `Account[]` | - | - |
| chains | 网络列表 | `Chain[]` | - | - |
| requestAccounts | 请求账户列表的方法 | `() => Promise<Account[]>` | - | - |
| disconnect | 断开连接的方法 | `() => Promise<viod>` | - | - |
| switchChain | 切换网络的方法 | `(chain: Chain) => Promise<viod>` | - | - |

### ConnectorTriggerProps

`Connector` 的 `children` 组件的属性，`ConnectButton` 继承并使用了这些属性。如果你不使用 `ConnectButton`，可以通过在自己的组件中来使用这些属性来自定义 `Connector` 的 `chidlren`。

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| address | 当前连接的账户地址 | `string` | - | - |
| onConnectClick | 连接事件 | `React.MouseEventHandler` | - | - |
| onDisconnectClick | 断开连接事件 | `React.MouseEventHandler` | - | - |
| onSwitchChain | 切换网络事件 | `(chain: Chain) => Promise<viod>` | - | - |
| name | address 对应的名称，通常就是指 ENS | `string` | - | - |
| connected | 是否已连接 | `boolean` | - | - |
| chains | 当前连接的网络列表 | `ChainSelectItem[]` | - | - |
| banlance | 当前连接的账户余额 | `Banlance[]` \| `Banlance` | - | - |
