const ethers = require("ethers");

const Wallet = new ethers.Wallet(process.env.MASTER_PRIVATE_KEY);

const getMasterWallet = () => {
  return Wallet;
};

const getMasterAddress = () => {
  return Wallet.address;
};

const checkValidEVMWallet = (address) => {
  const isValid = ethers.utils.isAddress(address);
  return isValid;
};

module.exports = {
  getMasterAddress,
  getMasterWallet,
  checkValidEVMWallet,
};
