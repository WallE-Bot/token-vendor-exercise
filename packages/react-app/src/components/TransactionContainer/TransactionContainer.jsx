import React, { useState } from 'react';
import './TransactionContainer.css';
import { TransactionWindow, TransactionPanels } from '../../components';

const TransactionContainer = ({
    ethPrice,
    address,
    userLocalBalance,
    vendorAddress
  }) => {

  const [activePanel, setActivePanel] = useState('transfer');

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
      />
    </div>
  );

}

export default TransactionContainer;
