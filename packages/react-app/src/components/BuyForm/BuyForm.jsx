import React, { useState } from 'react';
import './BuyForm.css';

const BuyForm = () => {

  const [playAmount, setPlayAmount] = useState('');
  const [ethTotal, setEthTotal] = useState('');
  const [usdTotal, setUsdTotal] = useState('');

  const handleInputChange = e => {
    const stateFunctions = {
      'play-amount': setPlayAmount,
      'eth-total': setEthTotal,
      'usd-total': setUsdTotal
    };

    const inputName = e.target.id;
    const value = e.target.value;
    const stateFunction = stateFunctions[inputName];

    stateFunction(value);
  }

  return (
    <form
      className='transaction-form buy-form'
    >
      <label htmlFor='play-amount'>
        PLAY amount:
        <input
          onChange={handleInputChange}
          name='play-amount'
          id='play-amount'
          type='number'
          placeHolder='0'
          value={playAmount}
        />
      </label>
      <label htmlFor='eth-total'>
        ETH total:
        <input
          onChange={handleInputChange}
          name='eth-total'
          id='eth-total'
          type='number'
          placeHolder='0'
          value={ethTotal}
        />
      </label>
      <label htmlFor='usd-total'>
        USD total:
        <input
          onChange={handleInputChange}
          name='usd-total'
          id='usd-total'
          type='number'
          placeHolder='0'
          value={usdTotal}
        />
      </label>
      <input
        type='submit'
      />
    </form>
  );

}

export default BuyForm;
