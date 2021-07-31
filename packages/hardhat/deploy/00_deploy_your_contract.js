// deploy/00_deploy_your_contract.js
const utils = require("@ethersproject/units");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("YourContract", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    log: true,
  });

  const YourContract = await ethers.getContract("YourContract", deployer);
  const yourContractAddress = YourContract.address;
  await deploy("Vendor", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [yourContractAddress],
    log: true,
  });

  const VendorContract = await ethers.getContract('Vendor', deployer);
  const vendorContractAddress = VendorContract.address;
  const supply = await YourContract.totalSupply();
  const myAddress = '0xf59950DF4D0816F236FFb3A83fc58318B0ac0250';

  const result = await YourContract.transfer( vendorContractAddress, utils.parseEther("1000") );
  await VendorContract.transferOwnership(myAddress);
  await YourContract.increaseAllowance(vendorContractAddress, supply);
  await YourContract.increaseAllowance(myAddress, supply);
};
module.exports.tags = ["YourContract"];

/*
Tenderly verification
let verification = await tenderly.verify({
  name: contractName,
  address: contractAddress,
  network: targetNetwork,
});
*/
