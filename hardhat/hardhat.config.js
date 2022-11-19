require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");

// Provide your wallet private key
let privateKey =
  "1c4aa92cb7d0e394269720a23df3f9a070c52d8e74e269092aaa3ff4eebe50c3";

//Provide your SKALE endpoint address
let skale = "https://eth-sf.skalenodes.com/v1/hackathon-complex-easy-naos";
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
