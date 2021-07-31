pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import './YourContract.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vendor is Ownable {

  using SafeMath for uint256;
  // the PLAY token inclusion
  IERC20 private playToken;
  // set a constant price per token for the demo
  uint256 public constant tokensPerETH = 100;
  // buyer address, token amount, total ETH cost
  event BuyTokens(address, uint256, uint256);

  constructor(IERC20 token) public {
    playToken = token;
  }

  /*
    if user has sufficient balance
    and the vendor has enough tokens
    the transfer is made
    ----------------------
    confirm sufficient balance in UI as well
  */
  function buyTokens(address purchaser, uint256 tokenAmount) public payable {
    console.log(address(this), tokenAmount);
    playToken.transfer(purchaser, tokenAmount);
  }

}
