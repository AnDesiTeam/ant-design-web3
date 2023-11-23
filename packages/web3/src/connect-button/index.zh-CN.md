---
nav: 组件
group: 组件
---

# ConnectButton

快速和区块链建立连接。

## 基本使用

<code src="./demos/simple.tsx"></code>

## 展示提示

<code src="./demos/tooltip.tsx"></code>

## 显示名称

<code src="./demos/name.tsx"></code>

## 不同类型的按钮

<code src="./demos/type.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| address | 地址 | `string` | - | - |
| name | 名称，比如以太坊的 ENS | `string` | - | - |
| tooltip | 鼠标移入地址时展示提示 | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `true`，默认显示 address 信息 | - |

### ConnectButtonTooltipProps

```ts
// TooltipProps: https://ant.design/components/tooltip-cn#api
export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean; // 是否可复制
  title?: boolean | string | React.ReactNode; // 展示内容
};
```
