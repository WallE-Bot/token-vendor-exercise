import React, { useState, useEffect } from 'react';
import './Main.css';
import { TokenInfoContainer, TransactionContainer } from '../../components';

const Main = ({
    vendorPLAYBalance,
    tokensPerETH,
    ethPrice,
    userPLAYBalance,
    yourLocalBalance,
    PolyAlloyTokenContract,
    address,
    userLocalBalance,
    vendorAddress
 }) => {

  return (
    <main>
      <TokenInfoContainer
        vendorPLAYBalance={vendorPLAYBalance}
        tokensPerETH={tokensPerETH}
      />
      <TransactionContainer
        ethPrice={ethPrice}
        userPLAYBalance={userPLAYBalance}
        vendorPLAYBalance={vendorPLAYBalance}
        yourLocalBalance={yourLocalBalance}
        PolyAlloyTokenContract={PolyAlloyTokenContract}
        address={address}
        userLocalBalance={userLocalBalance}
        vendorAddress={vendorAddress}
        tokensPerETH={tokensPerETH}
      />
    </main>
  )

}

export default Main;
