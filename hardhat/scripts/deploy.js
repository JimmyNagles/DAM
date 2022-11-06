const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a DamNFTs
  const metadataURL = "ipfs://QmNMiUKHpmNwNZeCwWSUQWP227fGFnrqF1dFmvh21RSycG/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so damContract here is a factory for instances of our DamNFTs contract.
  */
  const damContract = await ethers.getContractFactory("DamNFTs");

  // deploy the contract
  const deployeddamContract = await damContract.deploy(metadataURL);

  await deployeddamContract.deployed();

  // print the address of the deployed contract
  console.log("DamNFTs Contract Address:", deployeddamContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
