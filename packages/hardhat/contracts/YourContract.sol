pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract YourContract is ERC20, Ownable {

  // mint tokens on execution to contract deployer
  constructor() ERC20("Poly Alloy", "PLAY") public {
    _mint(msg.sender, 1000 * (10 ** 18));
  }

}
