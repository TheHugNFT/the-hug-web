import { ethers } from 'ethers';
import { getContractWithSigner } from './contract';

export const mintNFT = async (
  walletAddress,
  count,
  setMintLoading,
  setNewMint
) => {
  const contract = getContractWithSigner();

  // contract.on("CreateCryptoAthletes(address, uint256)", (to, newId) => {
  //   const address = ethers.utils.getAddress(to)
  //   const newMintId = ethers.BigNumber.from(newId).toNumber()
  //
  //   setNewMint([address, newMintId])
  // })

  console.log('mintNFT 1');
  try {
    // let val = ethers.BigNumber.from(2e12).mul(
    //   ethers.BigNumber.from(1e9).mul(1).div(100).mul(count)
    // );
    let val = ethers.BigNumber.from('1000000000000000000').mul(count); //.03 matic
    // let val = ethers.BigNumber.from(2e19).mul(count); //30 matic
    console.log('val ', val);
    let txhash = await contract.mintPairs(1, {
      // value: ethers.BigNumber.from('200000000000000000').mul(count),
      value: val,
      from: walletAddress,
    });

    console.log('mintNFT 2');

    let res = await txhash.wait();
    setMintLoading(false);

    console.log('mintNFT 3');

    if (res.transactionHash) {
      return {
        success: true,
        status: `Successfully minted ${count} Hugs.`,
      };
    } else {
      return {
        success: false,
        status: 'Transaction failed',
      };
    }
  } catch (err) {
    setMintLoading(false);
    return {
      success: false,
      status: err.message,
    };
  }
};
