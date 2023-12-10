import { ConnectModal } from '@ant-design/web3';
import { groupOrder, guide, walletList } from './mock';
import { fireEvent, render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ConfigProvider, theme as antTheme } from 'antd';
import { mockBrowser } from '../../utils/test-utils';

describe('ConnectModal with guide', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  mockBrowser('Chrome');
  it.each(['light', 'dark'] as const)(`should render in %s mode`, (theme) => {
    const App = () => (
      <ConfigProvider
        theme={{
          algorithm: theme === 'light' ? antTheme.defaultAlgorithm : antTheme.darkAlgorithm,
        }}
      >
        <ConnectModal
          open
          title="ConnectModal"
          footer="蚂蚁链提供技术支持"
          groupOrder={groupOrder}
          walletList={walletList}
          guide={guide}
        />
      </ConfigProvider>
    );
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
    // should have ant-web3-connect-modal class
    expect(baseElement.querySelector('.ant-modal')?.className).toContain('ant-web3-connect-modal');

    // should have simple class when without guide
    expect(baseElement.querySelector('.ant-web3-connect-modal-body')?.className).not.toContain(
      'simple',
    );

    // should have title and footer
    expect(baseElement.querySelector('.ant-web3-connect-modal-title')?.textContent).toBe(
      'ConnectModal',
    );
    expect(baseElement.querySelector('.ant-web3-connect-modal-footer')?.textContent).toBe(
      '蚂蚁链提供技术支持',
    );

    // group order
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-group-title')[0].textContent).toBe(
      'Popular',
    );
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-group-title')[1].textContent).toBe(
      'More',
    );

    // wallet list items
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item').length).toBe(
      walletList.length,
    );

    // should have guide panel
    expect(baseElement.querySelector('.ant-web3-connect-modal-guide-panel')).not.toBeNull();
    expect(baseElement.querySelector('.ant-web3-connect-modal-guide-title')?.textContent).toBe(
      guide.title,
    );
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-guide-item').length).toBe(
      guide.infos.length,
    );
    expect(baseElement.querySelector('.ant-web3-connect-modal-more')?.getAttribute('href')).toBe(
      guide.moreLink,
    );
  });

  it('panel route change', async () => {
    const App = () => (
      <ConnectModal
        open
        title="ConnectModal"
        footer="蚂蚁链提供技术支持"
        walletList={walletList}
        guide={guide}
      />
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-modal-get-btn')!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-get-wallet-panel')).toBeTruthy();
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-item').length).toBe(
      walletList.length,
    );

    fireEvent.click(baseElement.querySelectorAll('.ant-web3-connect-modal-get-wallet-btn')[0]);
    expect(baseElement.querySelector('.ant-web3-connect-modal-card-list')).toBeTruthy();
    expect(baseElement.querySelectorAll('.ant-web3-connect-modal-card-item').length).toBe(2);

    fireEvent.click(baseElement.querySelectorAll('.ant-web3-connect-modal-card-item')[1]!);
    expect(baseElement.querySelector('.ant-web3-connect-modal-qr-code-container')).toBeTruthy();

    fireEvent.click(baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item')[2]!);
    expect(baseElement).toMatchSnapshot();

    fireEvent.click(baseElement.querySelectorAll('.ant-web3-connect-modal-wallet-item')[4]!);
    expect(baseElement).toMatchSnapshot();
  });

  it('should ctrl by open', async () => {
    const App = ({ defaultOpen = false }: { defaultOpen?: boolean }) => {
      const [open, setOpen] = useState(defaultOpen);
      useEffect(() => setOpen(defaultOpen), [defaultOpen]);
      return (
        <ConnectModal
          open={open}
          title="ConnectModal"
          footer="蚂蚁链提供技术支持"
          groupOrder={groupOrder}
          walletList={walletList}
          guide={guide}
          destroyOnClose={true}
          onCancel={() => setOpen(false)}
        />
      );
    };
    const { baseElement, rerender } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-modal')).toBeFalsy();

    rerender(<App defaultOpen />);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal')).toBeTruthy();
    });

    fireEvent.click(baseElement.querySelector('.ant-modal-close')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-modal')?.className).toContain(
        'ant-zoom-leave',
      );
    });
  });
});
