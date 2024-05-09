const Response = require("../helpers/Response.helper");
const ethers = require("ethers");
const { getTokenBalance, sendTokens } = require("../services/Contract");
const { checkValidEVMWallet } = require("../services/Wallet");

const defaultController = (req, res) => {
  const response = new Response(res);

  const version = "1.0.0";

  const name = "Faucet API";

  response.ok({
    name,
    version,
  });
};

const getAddressBalance = async (req, res) => {
  const response = new Response(res);
  const { address } = req.body;

  if (!address) return response.ko("Please provide an EVM address");

  const check = checkValidEVMWallet(address);
  if (!check) return response.ko("Please provide an EVM address");

  try {
    const tokenBalance = await getTokenBalance(address);
    response.ok("Tokens balance", tokenBalance);
  } catch (error) {
    response.ko("Error getting balance");
  }
};

const claimTokens = async (req, res) => {
  const response = new Response(res);
  const { address } = req.body;

  if (!address) return response.ko("Please provide an EVM address");

  const check = checkValidEVMWallet(address);
  if (!check) return response.ko("Please provide an EVM address");

  try {
    const hash = await sendTokens(address);

    response.ok("Tokens sent to address", hash);
  } catch (error) {
    response.ko("Error sending tokens");
  }
};

module.exports = {
  defaultController,
  getAddressBalance,
  claimTokens,
};
