require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

// Provide your wallet private key
let privateKey = "";

//Provide your SKALE endpoint address
let skale = "https://eth-sf.skalenodes.com/v1/hackathon-complex-easy-naos/";
//chain id 647426021
module.exports = {
  defaultNetwork: "skale",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    skale: {
      url: skale,
      accounts: [privateKey],
      gasPrice: 0,
    },
  },
};
