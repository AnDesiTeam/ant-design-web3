import TonConnect, { CHAIN, type TonConnectOptions } from '@tonconnect/sdk';

export interface TonConnectSdkConfigType extends TonConnectOptions {
  chain?: CHAIN;
}
class TonConnectSdk extends TonConnect {
  private _api: string;
  private _network: CHAIN;

  constructor(options: TonConnectSdkConfigType) {
    super({ manifestUrl: options.manifestUrl });
    this._api = '';
    this._network = CHAIN.MAINNET;
    this._switchNetwork(options.chain || this._network);
  }

  get network() {
    return this._network;
  }

  set network(network: CHAIN) {
    this._switchNetwork(network);
  }

  private _switchNetwork(network: CHAIN) {
    if (network === CHAIN.MAINNET) {
      this._api = 'https://toncenter.com/api/v3';
    } else {
      this._api = 'https://testnet.toncenter.com/api/v3';
    }
    this._network = network;
  }

  async getBalance() {
    if (!this.account?.address) return Promise.resolve('0');
    return fetch(`${this._api}/account?address=${this.account?.address}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch balance');
        }
        return res.json();
      })
      .then((res) => {
        return res.balance as string;
      })
      .catch((e) => {
        console.error(e);
        return '0';
      });
  }
}

export default TonConnectSdk;
