require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "",
      accounts: [``],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "",
    },
  },
};
