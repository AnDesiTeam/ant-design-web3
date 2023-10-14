import { CopyOutlined } from '@ant-design/icons';
import type { TooltipProps} from 'antd';
import { Space, Tooltip, message } from 'antd';
import React from 'react';

export interface AddressProps {
  ellipsis?: boolean | {
    headClip?: number;
    tailClip?: number;
  };
  address?: string;
  copyable?: boolean;
  tooltip?: boolean | TooltipProps["title"];
}

export const Address: React.FC<AddressProps> = (props) => {
  const { ellipsis, address, copyable, tooltip } = props;

  const isEllipsis = !!ellipsis;
  const {
    headClip = 6,
    tailClip = 4,
  } = typeof ellipsis !== 'object' ? {
    headClip: 6,
    tailClip: 4,
  } : ellipsis;

  if (!address) {
    return null;
  }

  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;
  const displayTooltip = (tooltip === undefined || tooltip === true) ? filledAddress : tooltip;

  return (
    <Space>
      <Tooltip title={displayTooltip}>
        {isEllipsis ? `${filledAddress.slice(0, headClip)}...${filledAddress.slice(-tailClip)}` : filledAddress}
      </Tooltip>
      {copyable && (
        <CopyOutlined
          title='Copy Address'
          onClick={() => {
            navigator.clipboard.writeText(filledAddress).then(() => {
              message.success('Address Copied');
            });
          }}
        />
      )}
    </Space>
  );
};
