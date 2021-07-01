import React, { useState } from 'react';
import './BuyForm.css';

// error handling and UI feedback to do later
const BuyForm = ({
    ethPrice,
    userLocalBalance,
    vendorPLAYBalance,
    address,
    vendorAddress,
    PolyAlloyTokenContract,
    tokensPerETH,
  }) => {

  const [playAmount, setPlayAmount] = useState('');
  const [ethTotal, setEthTotal] = useState('');
  const [usdTotal, setUsdTotal] = useState('');

  const isUserETHBalanceSufficient = () => {
    return userLocalBalance.toString() >= ethTotal;
  }

  const isVendorPLAYBalanceSufficient = () => {
    return vendorPLAYBalance >= playAmount;
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const userETHSufficient = isUserETHBalanceSufficient();
    const vendorPLAYSufficient = isVendorPLAYBalanceSufficient();
    console.log('fired', userLocalBalance.toString(), vendorPLAYBalance);
    if (userETHSufficient && vendorPLAYSufficient) {
      console.log('success');
      const result = await PolyAlloyTokenContract.transferFrom(
          vendorAddress,
          address,
          playAmount
        );
      setAllValues('');
    }
  }

  const setAllValues = (PLAY, ETH, USD) => {
    setPlayAmount(PLAY);
    setEthTotal(ETH);
    setUsdTotal(USD);
  }

  const handlePlayAmountChange = value => {
    const ethValue = value / tokensPerETH;
    const usdValue = ethValue * ethPrice;
    setAllValues(value, ethValue, usdValue);
  }

  const handleEthTotalChange = value => {
    const playValue = value * tokensPerETH;
    const usdValue = value * ethPrice;
    setAllValues(playValue, value, usdValue);
  }

  const handleUsdTotalChange = value => {
    const ethValue = value / ethPrice;
    const playValue = ethValue * tokensPerETH;
    setAllValues(playValue, ethValue, value);
  }

  const handleInputChange = e => {
    const stateFunctions = {
      'play-amount': handlePlayAmountChange,
      'eth-total': handleEthTotalChange,
      'usd-total': handleUsdTotalChange
    };

    const inputName = e.target.id;
    const value = e.target.value;
    const stateFunction = stateFunctions[inputName];

    stateFunction(value);
  }

  const convertToETH = (value) => {
    return
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
          placeholder='0'
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
          placeholder='0'
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

export default BuyForm;
