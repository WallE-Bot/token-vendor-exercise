import React, { useState } from 'react';
import './BuyForm.css';

// error handling and UI feedback to do later
const BuyForm = ({
    ethPrice,
    userLocalBalance,
    vendorPLAYBalance,
    address,
    vendorAddress,
    polyAlloyTokenContract
  }) => {

  const [playAmount, setPlayAmount] = useState('');
  const [ethTotal, setEthTotal] = useState('');
  const [usdTotal, setUsdTotal] = useState('');

  const reset = () => {
    setPlayAmount('');
    setEthTotal('');
    setUsdTotal('');
  }

  const isUserETHBalanceSufficient = () => {
    return userLocalBalance >= ethTotal;
  }

  const isVendorPLAYBalanceSufficient = () => {
    return vendorPLAYBalance >= playAmount;
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const userETHSufficient = isUserETHBalanceSufficient();
    const vendorPLAYSufficient = isVendorPLAYBalanceSufficient();

    if (userETHSufficient && vendorPLAYSufficient) {
      const result = await polyAlloyTokenContract.transferFrom(
          vendorAddress,
          address,
          playAmount
        );
      reset();
    }
  }

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
      onSubmit={handleSubmit}
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
