import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import './TokenInfoContainer.css';
import { formatEther } from "@ethersproject/units";
const { BigNumber } = require("ethers");

const TokenInfoContainer = ({
  vendorPLAYBalance,
  tokensPerETH,
  ethPrice
}) => {
  const rate = parseFloat(1 / tokensPerETH * ethPrice).toFixed(2);
  const BN = BigNumber.from(vendorPLAYBalance);
  const formattedPLAY = parseFloat(formatEther(BN)).toFixed(0);

  const infoData = {
    'RATE': `$${rate} USD`,
    'PLAY AVAILABLE': `${formattedPLAY}`
  }

  const generateTokenInfoList = () => {
    const infoItems = Object
      .entries(infoData)
      .map(([key, value]) => {
        return (
          <li
            className='info-list-item'
            key={uuid()}
          >
            <p className='info-item-text'>{key}: {value}</p>
          </li>
        );
      });

    return (
      <ul className='info-list'>
        {infoItems}
      </ul>
    )
  }

  return (
    <section className='token-info-container'>
      {generateTokenInfoList()}
    </section>
  )

}

export default TokenInfoContainer;
