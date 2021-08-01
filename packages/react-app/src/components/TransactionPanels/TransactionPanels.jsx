import React from 'react';
import './TransactionPanels.css';
import { uuid } from 'uuidv4';

const TransactionPanels = ({ activePanel, handlePanelClick }) => {

  const generatePanelButtons = () => {
    return ['buy', 'transfer'].map(type => {
      const selected = activePanel === type
        ? ' selected'
        : '';

      return (
        <button
          key={uuid()}
          onClick={handlePanelClick}
          value={type}
          className={`panel ${type}${selected}`}
        >
          {type}
        </button>
      )
    });
  }

  return (
    <section className='transaction-panels'>
      {generatePanelButtons()}
    </section>
  )

}

export default TransactionPanels;
