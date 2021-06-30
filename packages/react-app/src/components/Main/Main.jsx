import React, { useState, useEffect } from 'react';
import './Main.css';
import { TokenInfoContainer, TransactionContainer } from '../../components';

const Main = ({ vendorPLAYBalance, tokensPerETH }) => {

  return (
    <main>
      <TokenInfoContainer
        vendorPLAYBalance={vendorPLAYBalance}
        tokensPerETH={tokensPerETH}
      />
      <TransactionContainer />
    </main>
  )

}

export default Main;
