import { fireEvent } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it } from 'vitest';

import { useAdapter } from '../../adapter';
import { BitcoinWeb3ConfigProvider } from '../index';
import { xrender } from './utils';

describe('BitcoinWeb3ConfigProvider', () => {
  it('sign message', () => {
    const SignMessage: React.FC = () => {
      const { signMessage } = useAdapter();
      return (
        <Button
          className="sign-message"
          onClick={() =>
            signMessage?.('bc1p3cphtuyx38ut42njdxzm4gvft3r75232lnj2ph6w5urpzum3whuquu6fam', 10000)
          }
        >
          签名
        </Button>
      );
    };

    const App = () => (
      <BitcoinWeb3ConfigProvider>
        <SignMessage />
      </BitcoinWeb3ConfigProvider>
    );

    const { selector } = xrender(App);
    const sendBtn = selector('.sign-message')!;
    expect(sendBtn).not.toBeNull();
    fireEvent.click(sendBtn);
  });
});
