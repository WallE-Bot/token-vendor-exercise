import React, { useState } from 'react';
import './BuyForm.css';
import { parseUnits, formatEther, parseEther } from "@ethersproject/units";
import { Transactor } from "../../helpers";
const { BigNumber } = require("ethers");

// error handling and UI feedback to do later
const BuyForm = ({
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
    tx,
    signer,
    blockExplorer,
  }) => {

  const [playAmount, setPlayAmount] = useState('');
  const [ethTotal, setEthTotal] = useState('');
  const [usdTotal, setUsdTotal] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const returned = await VendorContract.buyTokens(
      address,
      playAmount,
      { value: parseUnits(ethTotal) },
    );

    console.log(returned);
    setAllValues('','','');
  }

  const setAllValues = (PLAY, ETH, USD) => {
    setPlayAmount(PLAY);
    setEthTotal(ETH);
    setUsdTotal(USD);
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
          min={1}
        />
      </label>
      <input
        type='submit'
      />
    </form>
  );

}

export default BuyForm;
