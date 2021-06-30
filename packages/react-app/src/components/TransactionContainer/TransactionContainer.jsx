import React, { useState } from 'react';
import './TransactionContainer.css';
import { TransactionWindow, TransactionPanels } from '../../components';

const TransactionContainer = () => {

  const [activePanel, setActivePanel] = useState('buy');

  const handlePanelClick = e => {
    const panel = e.target.text;
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
      />
    </div>
  );

}

export default TransactionContainer;
