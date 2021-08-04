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
    vendorAddress,
    VendorContract,
    provider,
    gasPrice,
    tx,
    signer,
    blockExplorer,
    buyTokens,
    allowance,
    increaseAllowance,
    transferFrom,
    updatePLAYBalances,
 }) => {

  return (
    <main>
      <TokenInfoContainer
        vendorPLAYBalance={vendorPLAYBalance}
        tokensPerETH={tokensPerETH}
        ethPrice={ethPrice}
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
        VendorContract={VendorContract}
        provider={provider}
        gasPrice={gasPrice}
        tx={tx}
        signer={signer}
        blockExplorer={blockExplorer}
        buyTokens={buyTokens}
        allowance={allowance}
        increaseAllowance={increaseAllowance}
        transferFrom={transferFrom}
        updatePLAYBalances={updatePLAYBalances}
      />
    </main>
  )

}

export default Main;
