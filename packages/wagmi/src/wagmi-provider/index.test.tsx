import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { createConfig, configureChains } from 'wagmi';
import { polygon, mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Connector, type ConnectorTriggerProps } from '@ant-design/web3';
import { WagmiWeb3ConfigProvider } from '.';
import { Mainnet } from '@ant-design/web3-assets';

describe('WagmiWeb3ConfigProvider', () => {
  it('mount correctly', () => {
    const { publicClient } = configureChains([mainnet], [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const App = () => (
      <WagmiWeb3ConfigProvider config={config}>
        <div className="content">test</div>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('test');
  });

  it('chains', () => {
    const chains = [polygon, mainnet];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { currentChain, onSwitchChain } = props;
      return (
        <div
          onClick={() => {
            onSwitchChain?.(Mainnet);
          }}
          className="content"
        >
          {currentChain?.name}
        </div>
      );
    };

    const switchChain = vi.fn();

    const App = () => (
      <WagmiWeb3ConfigProvider chains={chains} config={config}>
        <Connector switchChain={switchChain}>
          <CustomButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('Polygon');
    fireEvent.click(baseElement.querySelector('.content')!);
    expect(switchChain).toBeCalledWith(Mainnet);
  });

  it('custom assets', () => {
    const customChainId = 2333;
    const chains = [
      {
        ...mainnet,
        id: customChainId,
        name: 'TEST Chain',
      },
      polygon,
    ];
    const { publicClient } = configureChains(chains, [publicProvider()]);
    const config = createConfig({
      autoConnect: true,
      publicClient,
      connectors: [],
    });

    const CustomButton: React.FC<React.PropsWithChildren<ConnectorTriggerProps>> = (props) => {
      const { currentChain, onSwitchChain } = props;
      return (
        <div
          onClick={() => {
            onSwitchChain?.(chains[0]);
          }}
          className="content"
        >
          {currentChain?.name}
        </div>
      );
    };

    const switchChain = vi.fn();
    const assets = [
      {
        name: 'TEST Chain show text',
        id: customChainId,
        icon: <div>icon</div>,
        nativeCurrency: {
          name: 'Matic',
          symbol: 'MATIC',
          decimals: 18,
        },
      },
    ];

    const App = () => (
      <WagmiWeb3ConfigProvider assets={assets} chains={chains} config={config}>
        <Connector switchChain={switchChain}>
          <CustomButton />
        </Connector>
      </WagmiWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.content')?.textContent).toBe('TEST Chain show text');
    fireEvent.click(baseElement.querySelector('.content')!);
    expect(switchChain).toBeCalledWith(chains[0]);
  });
});
