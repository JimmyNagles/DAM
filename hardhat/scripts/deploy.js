const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("../constants");

async function main() {
  // URL from where we can extract the metadata for a DamNFTs
  const metadataURL =
    "https://bafybeifloqzb6mgqcjikzydavnirpr3miqvzwxomow5gjqsvcn5tbm5vcy.ipfs.nftstorage.link/";
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

  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so DamGame here is a factory for instances of our DamGame contract.
 */
  const DamGame = await ethers.getContractFactory("DamGame");
  // deploy the contract
  const deployedDamGameContract = await DamGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  );

  await deployedDamGameContract.deployed();

  // print the address of the deployed contract
  console.log("Verify Contract Address:", deployedDamGameContract.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedDamGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
