const { ethers, BigNumber } = require("hardhat");

const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";

const VRF_COORDINATOR = "0x7a1bac17ccc5b313516c5e16fb24f7659aa5ebed";
const KEY_HASH =
  "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";
const FEE = ethers.utils.parseEther("0.0001");
module.exports = { LINK_TOKEN, VRF_COORDINATOR, KEY_HASH, FEE };
