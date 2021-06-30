import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import './TokenInfoContainer.css';

const TokenInfoContainer = () => {

  const infoData = {
    'rate': '.0001 ETH / PLAY',
    'vendor supply': '10000'
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
