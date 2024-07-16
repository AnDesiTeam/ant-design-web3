import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { fireEvent, render, waitFor } from '@testing-library/react';
import TonConnect, { CHAIN } from '@tonconnect/sdk';
import { Button } from 'antd';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { tonkeeper } from '../../wallets';
import TonConnectSdk from '../TonConnectSdk';
import { TonConnectorContext, TonWeb3ConfigProvider } from '../TonWeb3ConfigProvider';

global.fetch = vi.fn();
function createFetchResponse(data: any) {
  return Promise.resolve({ ok: true, json: () => new Promise((resolve) => resolve(data)) });
}

describe('TonSDK', () => {
  beforeEach(() => {
    // @ts-ignore: vi.fn().mockReset
    global.fetch.mockReset();
  });

  afterAll(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it('switch network', () => {
    const SwitchBtn: React.FC = () => {
      const provider = React.useContext(TonConnectorContext ?? {});
      const switchNetwork = () => {
        if (provider?.tonConnectSdk) {
          provider.tonConnectSdk.network = CHAIN.TESTNET;
        }
      };
      return (
        <Button
          className="switch"
          onClick={switchNetwork}
        >{`${provider?.tonConnectSdk?.network}-${provider?.tonConnectSdk?.api}`}</Button>
      );
    };

    const App = () => {
      return (
        <TonWeb3ConfigProvider wallets={[tonkeeper]} balance>
          <Connector>
            <ConnectButton className="connect" />
          </Connector>
          <SwitchBtn />
        </TonWeb3ConfigProvider>
      );
    };
    const { baseElement } = render(<App />);
    const switchBtn = baseElement.querySelector('.switch') as HTMLButtonElement;
    expect(switchBtn.textContent).toBe('-239-https://toncenter.com/api/v3');
    fireEvent.click(switchBtn);
    waitFor(() => {
      expect(switchBtn.textContent).toBe('-3-https://testnet.toncenter.com/api/v3');
    });
  });

  it('get balance success', async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue(createFetchResponse({ balance: '1000000000000' }));
    const connector = new TonConnectSdk({ chain: CHAIN.TESTNET });
    const balance = await connector.getBalance(
      `${connector.api}/account?address=0QCWb5WbnAAqfMrmsBA8uZ_rfx-_8sDMByoqlC4HsbnG_VEy`,
    );
    expect(balance).not.toBe('0');
  });

  it('get balance failed', async () => {
    // @ts-ignore: vi.fn().mockResolvedValue
    fetch.mockResolvedValue({ ok: false });
    const connector = new TonConnectSdk({ chain: CHAIN.TESTNET });
    const balance = await connector.getBalance(
      `${connector.api}/account?address=0QCWb5WbnAAqfMrmsBA8uZ_rfx-_8sDMByoqlC4HsbnG_VEy`,
    );
    expect(balance).toBe('0');
  });
});
