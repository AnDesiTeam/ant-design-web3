---
nav: Components
group: Display
---

# BrowserLink

a quick way to use etherscan adress.

## Simple Usage

<code src="./demos/simple.tsx"></code>

## Complex Usage

<code src="./demos/complex.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| `icon` | Optional. Icon property, can be a boolean value or a custom React node. | `boolean \| React.ReactNode` | - | - |
| `ellipsis` | Optional. Whether to enable ellipsis for displaying Ethereum addresses. | `boolean` | - | - |
| `address` | Required. Ethereum address to generate the link. | `string` | - | - |
| `href` | Optional. Custom link target. If provided, it will override the generated link. | `string` | - | - |
| `type` | Optional. The type of link, either 'address' (default) or 'transaction'. | `address \| transaction` | `address` | - |
| `chain` | Optional. Ethereum chain identifier. Defaults to the mainnet. | `ChainIds` | `ChainIds.Mainnet` | - |
