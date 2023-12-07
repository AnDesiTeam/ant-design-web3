---
nav: Components
group: Display
---

# NFTImage

Components used to display NFT images more conveniently and simply.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Use with wagmi

<code src="./demos/wagmi.tsx"></code>

## Custom getNFTMetadata

<code src="./demos/customGetNFTMetadata.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| address | NFT contract address. | `string` | - | - |
| tokenId | NFT token ID, which can be of type bigint or number. | `bigint \| number` | - | - |
| getNFTMetadata | Custom method to get NFT metadata. | `(address: string, tokenId: bigint \| number) => Promise<NFTMetadata>` | - | - |

Other properties inherited from the [Ant Design Image](https://ant-design.antgroup.com/components/image) component.
