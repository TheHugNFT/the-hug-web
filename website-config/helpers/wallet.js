import detectEthereumProvider from '@metamask/detect-provider';
import { FaEthereum } from 'react-icons/fa';

const CHAIN_ID = '0x89';
const RPC_URL = 'https://polygon-rpc.com';

export const connectWallet = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      const walletChainId = await provider.request({
        method: 'eth_chainId',
      });

      if (parseInt(walletChainId) === parseInt(CHAIN_ID)) {
        const addressArray = await provider.request({
          method: 'eth_requestAccounts',
        });

        if (addressArray.length) {
          return {
            address: addressArray[0],
            status: 'Connected',
          };
        } else {
          return {
            address: '',
            status: 'No wallet connected',
          };
        }
      } else {
        provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: CHAIN_ID }],
        });

        return {
          address: '',
          status: 'Adding',
        };
      }
    } catch (err) {
      return {
        address: '',
        status: `😥 ${err.message}`,
      };
    }
  } else {
    console.log(`🦊 You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)`);
    return {
      address: '',
      status: "Can't find web3 provider",
    };
  }
};

export const addPolygonChain = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x89',
            chainName: 'Matic',
            nativeCurrency: {
              name: 'Matic',
              symbol: 'MATIC',
              decimals: 18,
            },
            rpcUrls: ['https://polygon-rpc.com/'],
            blockExplorerUrls: ['https://polygonscan.com/'],
          },
        ],
      });
    } catch (err) {
      console.log('Chain Add Error');
    }
  }
};

export const getCurrentWalletConnected = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      const addressArray = await provider.request({
        method: 'eth_accounts',
      });

      const walletChainId = await provider.request({
        method: 'eth_chainId',
      });

      if (addressArray.length && walletChainId === CHAIN_ID) {
        return {
          address: addressArray[0],
          status: 'Get your CryptoAthletes pack, 0.05ETH',
        };
      } else {
        return {
          address: '',
          status: 'Connect Metamask',
        };
      }
    } catch (err) {
      return {
        address: '',
        status: `😥 ${err.message}`,
      };
    }
  } else {
    console.log(`🦊 You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)`);
    return {
      address: '',
      status: "Can't find web3 provider",
    };
  }
};
