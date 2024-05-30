import { useState } from 'react';
import type { CryptoInputProps, Token } from '@ant-design/web3';
import { ChainIds, CryptoInput } from '@ant-design/web3';
import { EthereumColorful } from '@ant-design/web3-icons';

const App: React.FC = () => {
  const [crypto, setCrypto] = useState<CryptoInputProps['value']>();

  const [tokenBalance, setTokenBalance] = useState<{
    amount: string;
    unitPrice: string;
  }>();

  const handleQueryCrypto = async (token?: Token) => {
    if (!token) {
      return setTokenBalance(undefined);
    }

    // mock query token balance
    setTimeout(() => {
      setTokenBalance({
        amount: '100',
        unitPrice: '100',
      });
    }, 500);
  };

  return (
    <CryptoInput
      value={crypto}
      balance={tokenBalance}
      onChange={(value) => {
        setCrypto(value);

        if (value?.token?.symbol !== crypto?.token?.symbol) {
          handleQueryCrypto(value?.token);
        }
      }}
      tokenList={[
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: <EthereumColorful />,
          decimal: 18,
          availableChains: [
            {
              chain: {
                id: ChainIds.Mainnet,
                name: 'Ethereum',
              },
              contract: '0x',
            },
          ],
        },
      ]}
    />
  );
};

export default App;
