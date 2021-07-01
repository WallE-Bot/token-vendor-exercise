import React, { useState } from 'react';
import './TransferForm.css';

// error handling and UI feedback to do later
const TransferForm = ({
    ethPrice,
    userPLAYBalance,
    yourLocalBalance,
    polyAlloyTokenContract,
    address
  }) => {

  const [playAmount, setPlayAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [ethTotal, setEthTotal] = useState('');
  const [usdTotal, setUsdTotal] = useState('');

  const reset = () => {
    setPlayAmount('');
    setRecipient('');
    setEthTotal('');
    setUsdTotal('');
  }

  // is user PLAY balance large enough
  const isBalanceSufficient = () => {
    return userPLAYBalance >= playAmount;
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const hasBalance = isBalanceSufficient();
    if (hasBalance) {
      const result = await polyAlloyTokenContract.transferFrom(address, recipient, playAmount);
      reset();
    }
  }

  const handleInputChange = e => {
    const stateFunctions = {
      'play-amount': setPlayAmount,
      'recipient': setRecipient,
      'eth-value': setEthTotal,
      'usd-value': setUsdTotal
    };

    const inputName = e.target.id;
    const value = e.target.value;
    const stateFunction = stateFunctions[inputName];

    stateFunction(value);
  }

  return (
    <form
      className='transaction-form'
      onSubmit={handleSubmit}
    >
      <label htmlFor='play-amount'>
        PLAY amount:
        <input
          onChange={handleInputChange}
          name='play-amount'
          id='play-amount'
          type='number'
          placeholder='0'
          value={playAmount}
        />
      </label>
      <label htmlFor='recipient'>
        Recipient:
        <input
          onChange={handleInputChange}
          name='recipient'
          id='recipient'
          type='text'
          placeholder='0x0000000000000000000000000000000000000000'
          value={recipient}
        />
      </label>
      <label htmlFor='eth-value'>
        ETH value:
        <input
          onChange={handleInputChange}
          name='eth-value'
          id='eth-value'
          type='number'
          placeholder='0'
          value={ethTotal}
        />
      </label>
      <label htmlFor='usd-value'>
        USD value:
        <input
          onChange={handleInputChange}
          name='usd-value'
          id='usd-value'
          type='number'
          placeholder='0'
          value={usdTotal}
        />
      </label>
      <input
        type='submit'
      />
    </form>
  );

}

export default TransferForm;
