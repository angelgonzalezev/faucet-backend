const express = require("express");
const { defaultController, getAddressBalance, claimTokens } = require("../controllers/Faucet.controller");

const router = express.Router();

router.get("/", defaultController);
router.get("/balance", getAddressBalance);
router.post("/claim", claimTokens);

module.exports = router;
