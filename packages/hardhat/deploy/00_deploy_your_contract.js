// deploy/00_deploy_your_contract.js

//const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Token", {
    from: deployer,
    log: true,
  });

  const Token = await ethers.getContract("Token", deployer);
  await Token.transferOwnership('0xf59950DF4D0816F236FFb3A83fc58318B0ac0250');

  await deploy("Vendor", {
    from: deployer,
    args: [ Token.address ],
    log: true,
  });

  const tokenSupply = await Token.totalSupply();
  const Vendor = await ethers.getContract("Vendor", deployer);
  await Token.transfer(Vendor.address, tokenSupply);
  await Vendor.transferOwnership('0xf59950DF4D0816F236FFb3A83fc58318B0ac0250');
};
module.exports.tags = ["Token", "Vendor"];
