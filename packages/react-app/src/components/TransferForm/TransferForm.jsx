import React, { useState } from 'react';
import './TransferForm.css';
import { parseUnits, formatEther, parseEther } from "@ethersproject/units";
const { BigNumber } = require("ethers");

// error handling and UI feedback to do later
const TransferForm = ({
    ethPrice,
    userLocalBalance,
    vendorPLAYBalance,
    address,
    vendorAddress,
    PolyAlloyTokenContract,
    tokensPerETH,
    VendorContract,
    provider,
    gasPrice,
  }) => {

  const [playAmount, setPlayAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [ethTotal, setEthTotal] = useState('');
  const [usdTotal, setUsdTotal] = useState('');

  const setAllValues = (PLAY, ETH, USD, ADDR = recipient) => {
    setPlayAmount(PLAY);
    setEthTotal(ETH);
    setUsdTotal(USD);
    setRecipient(ADDR);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    // increase allowance


    // transfer
    const returned = await PolyAlloyTokenContract.transferFrom(
      address,
      recipient,
      { value: parseUnits(ethTotal) },
    );

    setAllValues('','','','');
  }

  const handlePlayAmountChange = value => {
    const ethValue = formatEther(parseUnits(value).div(tokensPerETH));
    const usdValue = ethValue * ethPrice;

    const formatUSDValue = usdValue > 1
      ? parseFloat(usdValue).toFixed(2)
      : usdValue;

    setAllValues(value, ethValue, formatUSDValue);
  }

  const handleEthTotalChange = value => {
    const playValue = formatEther(parseUnits(value).mul(tokensPerETH));
    const usdValue = value * ethPrice;

    const formatUSDValue = usdValue > 1
      ? parseFloat(usdValue).toFixed(2)
      : usdValue;

    setAllValues(playValue, value, formatUSDValue);
  }

  const handleUsdTotalChange = value => {
    const ethValue = parseFloat(value) / ethPrice;
    const playValue = ethValue * tokensPerETH;

    const formatUSDValue = value > 1
      ? parseFloat(value).toFixed(2)
      : value;

    setAllValues(playValue, ethValue, formatUSDValue);
  }

  const handleInputChange = e => {
    const stateFunctions = {
      'recipient': setRecipient,
      'play-amount': handlePlayAmountChange,
      'eth-total': handleEthTotalChange,
      'usd-total': handleUsdTotalChange
    };

    const inputName = e.target.id;

    const value = e.target.value;
    if (!value) { setAllValues('', '', ''); return; }

    const stateFunction = stateFunctions[inputName];
    stateFunction(value);
  }

  return (
    <form
      className='transaction-form'
      onSubmit={handleSubmit}
    >
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
      <label htmlFor='eth-value'>
        ETH value:
        <input
          onChange={handleInputChange}
          name='eth-value'
          id='eth-total'
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

export default TransferForm;
