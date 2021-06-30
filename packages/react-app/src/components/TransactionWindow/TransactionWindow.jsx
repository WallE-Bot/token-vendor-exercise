import React from 'react';
import './TransactionWindow.css';
import { BuyForm, TransferForm } from '../../components';

const TransactionWindow = ({ activePanel }) => {

  const generateForm = () => {
    return activePanel === 'buy'
      ? <BuyForm />
      : <TransferForm />
  }

  return (
    <div className='transaction-window'>
      {generateForm()}
    </div>
  )

}

export default TransactionWindow;
