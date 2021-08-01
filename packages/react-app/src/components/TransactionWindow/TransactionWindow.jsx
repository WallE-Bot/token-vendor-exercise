import React from 'react';
import './TransactionWindow.css';
import { BuyForm, TransferForm } from '../../components';

const TransactionWindow = ({
    activePanel,
    ethPrice,
    userPLAYBalance,
    vendorPLAYBalance,
    PolyAlloyTokenContract,
    address,
    userLocalBalance,
    vendorAddress,
    tokensPerETH,
 }) => {

   const props = {
     userPLAYBalance,
     vendorPLAYBalance,
     userLocalBalance,
     PolyAlloyTokenContract,
     address,
     vendorAddress,
     tokensPerETH,
     ethPrice,
   }

  const generateForm = () => {
    return activePanel === 'buy'
      ? <BuyForm {...props} />
      : <TransferForm {...props} />
  }

  return (
    <div className='transaction-window'>
      {generateForm()}
    </div>
  )

}

export default TransactionWindow;
