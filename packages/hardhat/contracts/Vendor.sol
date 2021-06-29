pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import './PolyAlloyToken.sol';
import "@openzeppelin/contracts/math/SafeMath.sol";

contract Vendor {

  using SafeMath for uint256;

  
  constructor() public {
  }

  /*
    amount user wants to buy and current token price
    if user has sufficient balance, the transfer is made
    all values arrive in ETH denomination
    confirm sufficient balance in UI as well
  */
  function buyTokens(uint256 amount, uint256 price) public payable {
    uint256 totalCost = amount.mul(price);

  }

}
