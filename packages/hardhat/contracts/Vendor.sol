pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import './PolyAlloyToken.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vendor is Ownable {

  using SafeMath for uint256;
  // the PLAY token inclusion
  IERC20 private playToken;
  // set a constant price per token for the demo
  uint256 public constant tokensPerETH = 1000;
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
    uint256 tokenWEIValue = tokenAmount * (10 ** 18);
    uint256 tokenETHValue = tokenWEIValue / tokensPerETH;
    uint256 vendorTokenBalance = playToken.balanceOf(address(this));

    // require token eth value <= transaction value
    require(tokenETHValue == msg.value,
      'Too much or not enough ETH sent, tokens are 1000 tokens/ETH');

    // require tokenAmount <= vendor contract balance
    require(tokenWEIValue <= vendorTokenBalance,
      'Not enough tokens available to fulfill the order');

    // emit event
    emit BuyTokens(purchaser, msg.value, tokenAmount);

    // transfer
    playToken.transfer(purchaser, tokenWEIValue);
  }

}
