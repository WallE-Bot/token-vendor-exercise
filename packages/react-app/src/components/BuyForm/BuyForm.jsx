import React, { useState } from 'react';
import './BuyForm.css';

const BuyForm = () => {

  const [playAmount, setPlayAmount] = useState(0);
  const [ethTotal, setEthTotal] = useState(0);
  const [usdTotal, setUsdTotal] = useState(0);

  return (
    <form
      className='transaction-form buy-form'
    >
      <label htmlFor='play-amount'>
        PLAY amount:
        <input
          name='play-amount'
          id='play-amount'
          type='text'
          value={playAmount}
        />
      </label>
      <label htmlFor='eth-total'>
        ETH total:
        <input
          name='eth-total'
          id='eth-total'
          type='text'
          value={ethTotal}
        />
      </label>
      <label htmlFor='usd-total'>
        USD total:
        <input
          name='usd-total'
          id='usd-total'
          type='text'
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
