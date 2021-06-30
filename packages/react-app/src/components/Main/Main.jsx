import React, { useState, useEffect } from 'react';
import './Main.css';
import { TokenInfoContainer } from '../../components';

const Main = ({ vendorPLAYBalance, tokensPerETH }) => {

  return (
    <main>
      <TokenInfoContainer
        vendorPLAYBalance={vendorPLAYBalance}
        tokensPerETH={tokensPerETH}
      />
    </main>
  )

}

export default Main;
