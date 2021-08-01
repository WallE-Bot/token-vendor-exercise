// deploy/00_deploy_your_contract.js
const utils = require("@ethersproject/units");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("PolyAlloyToken", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    log: true,
  });

  const PolyAlloyToken = await ethers.getContract("PolyAlloyToken", deployer);
  const polyAlloyTokenAddress = PolyAlloyToken.address;
  await deploy("Vendor", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [polyAlloyTokenAddress],
    log: true,
  });

  const VendorContract = await ethers.getContract('Vendor', deployer);
  const vendorContractAddress = VendorContract.address;
  const supply = await PolyAlloyToken.totalSupply();
  const myAddress = '0xf59950DF4D0816F236FFb3A83fc58318B0ac0250';

  const result = await PolyAlloyToken.transfer( vendorContractAddress, utils.parseEther("1000") );
  await VendorContract.transferOwnership(myAddress);
  await PolyAlloyToken.increaseAllowance(vendorContractAddress, supply);
  await PolyAlloyToken.increaseAllowance(myAddress, supply);
};
module.exports.tags = ["PolyAlloyToken"];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/
