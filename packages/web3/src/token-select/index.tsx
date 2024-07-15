import React from 'react';
import { type Token } from '@ant-design/web3-common';
import type { SelectProps } from 'antd';
import { Flex, Select } from 'antd';

import useIntl from '../hooks/useIntl';
import { useStyle } from './style';

export interface TokenSelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
  /**
   * selected value
   */
  value?: Token | Token[];
  /**
   * selected value change handler
   */
  onChange?: (value: Token) => void;
  /**
   * controlled token list
   */
  tokenList?: Token[];
}

/**
 * Single Token render
 */
const SingleToken = ({ token, hideName }: { token: Token; hideName?: boolean }) => {
  return (
    <Flex gap={8}>
      <span className="token-icon">{token.icon}</span>
      {!hideName && <span className="token-name">{token.name}</span>}
    </Flex>
  );
};

export const TokenSelect: React.FC<TokenSelectProps> = ({
  value,
  onChange,
  tokenList,
  mode,
  ...selectProps
}) => {
  const { messages } = useIntl('TokenSelect');

  const { wrapSSR } = useStyle('web3-token-select');

  // Multiple or tags mode
  const isMultipleOrTagsMode = ['multiple', 'tags'].includes(mode ?? '');

  return wrapSSR(
    <Select
      placeholder={messages.placeholder}
      popupMatchSelectWidth={false}
      {...selectProps}
      mode={mode}
      options={tokenList}
      value={
        isMultipleOrTagsMode
          ? (value as Token[])?.map((token) => token.symbol)
          : (value as Token)?.symbol
      }
      onChange={(_, token) => onChange?.(token as Token)}
      fieldNames={{
        value: 'symbol',
      }}
      labelRender={({ value: symbol }) => {
        const token = tokenList?.find((item) => item.symbol === symbol);

        if (!token) {
          return symbol;
        }

        return <SingleToken token={token} hideName={isMultipleOrTagsMode} />;
      }}
      filterOption={(input, option) => {
        const { name, symbol, availableChains } = option as Token;

        const nameLower = name.toLowerCase();

        const symbolLower = symbol.toLowerCase();

        const keywordLower = input.toLowerCase();

        return [
          nameLower,
          symbolLower,
          ...availableChains?.map(({ contract }) => contract?.toLowerCase()),
        ].some((content) => content?.includes(keywordLower));
      }}
      optionRender={({ data }) => {
        return <SingleToken token={data as Token} />;
      }}
    />,
  );
};
