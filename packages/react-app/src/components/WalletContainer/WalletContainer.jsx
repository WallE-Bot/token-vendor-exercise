import React, { useState } from "react";
import './WalletContainer.css';
import { formatEther } from "@ethersproject/units";

const WalletContainer = ({
    isConnected,
    loadWeb3Modal,
    logoutOfWeb3Modal,
    userPLAYBalance
  }) => {

  const clickData = {
    'connected': {
      handler: logoutOfWeb3Modal,
      text: 'logout'
    },
    'notConnected': {
      handler: loadWeb3Modal,
      text: 'connect'
    }
  };

  const clickDataKey = isConnected ? 'connected' : 'notConnected';
  const {handler, text} = clickData[clickDataKey];
  const formatPLAYBalance = parseFloat(formatEther(userPLAYBalance)).toFixed(2);

  return (
    <section className='wallet-container'>
      <h3 className='balance'>PLAY:  {formatPLAYBalance}</h3>
      <button
        className='wallet-button'
        onClick={handler}
      >
        {text}
      </button>
    </section>
  );
}

export default WalletContainer;
