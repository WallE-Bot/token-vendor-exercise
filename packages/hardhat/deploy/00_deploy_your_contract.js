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

  // get the contract after deployment and send supply to my address
  const PolyAlloyToken = await ethers.getContract("PolyAlloyToken", deployer);
  const tokenAddress = PolyAlloyToken.address;
  const supply = await PolyAlloyToken.totalSupply();
  const myAddress = '0xf59950DF4D0816F236FFb3A83fc58318B0ac0250';

  await deploy("Vendor", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [tokenAddress],
    log: true,
  });

  const Vendor = await ethers.getContract("Vendor", deployer);
  const vendorAddress = Vendor.address;

  // transfer the full supply to vendor(for now) and transfer
  // ownership to my front-end address
  const result = await PolyAlloyToken.transfer( vendorAddress, supply );
  await Vendor.transferOwnership(myAddress);

  // increaes vendor allowance
  await PolyAlloyToken.increaseAllowance(vendorAddress, supply);

  /*
    // Getting a previously deployed contract
    const PolyAlloyToken = await ethers.getContract("PolyAlloyToken", deployer);
    await PolyAlloyToken.setPurpose("Hello");

    //const yourContract = await ethers.getContractAt('PolyAlloyToken', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */
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
