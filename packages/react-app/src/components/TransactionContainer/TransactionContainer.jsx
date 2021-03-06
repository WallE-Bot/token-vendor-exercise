import React, { useState } from 'react';
import './TransactionContainer.css';
import { TransactionWindow, TransactionPanels } from '../../components';

const TransactionContainer = ({
    ethPrice,
    address,
    userLocalBalance,
    vendorAddress,
    vendorPLAYBalance,
    PolyAlloyTokenContract,
    tokensPerETH,
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
    updatePLAYBalances
  }) => {

  const [activePanel, setActivePanel] = useState('buy');

  const handlePanelClick = e => {
    const panel = e.target.value;
    console.log(panel);
    setActivePanel(panel);
  }

  return (
    <div className='transaction-container'>
      <TransactionPanels
        activePanel={activePanel}
        handlePanelClick={handlePanelClick}
      />
      <TransactionWindow
        activePanel={activePanel}
        ethPrice={ethPrice}
        address={address}
        userLocalBalance={userLocalBalance}
        vendorAddress={vendorAddress}
        vendorPLAYBalance={vendorPLAYBalance}
        PolyAlloyTokenContract={PolyAlloyTokenContract}
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
    </div>
  );

}

export default TransactionContainer;
