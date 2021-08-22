pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import './Token.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vendor is Ownable {

  using SafeMath for uint256;

  IERC20 private _token;
  uint256 public constant tokensPerETH = 1000;

  // buyer address, token amount, total ETH cost
  event BuyTokens(address, uint256, uint256);
  // seller address, token amount, total ETH returned
  event SellTokens(address, uint256, uint256);

  constructor(IERC20 token) public {
    _token = token;
  }

  /*
    require vendor has enough tokens to buy
    require msg value to equal required ETH amount
  */
  function buyTokens(uint256 tokenAmount) public payable {
    uint256 ETHAmount = tokenAmount.div(tokensPerETH);

    require(
      _token.balanceOf(address(this)) >= tokenAmount,
      "Vendor token supply too low"
    );
    require(
      msg.value == ETHAmount,
      "Incorrect ETH amount sent for purchase"
    );

    _token.approve(msg.sender, tokenAmount);
    _token.transfer(msg.sender, tokenAmount);
    emit BuyTokens(msg.sender, tokenAmount, ETHAmount);
  }

  /*
    require sender has enough tokens to sell
    require vendor has enough ETH to buy
  */
  function sellTokens(uint256 tokenAmount) public payable {

  }

}
