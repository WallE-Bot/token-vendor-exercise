import React, { useState } from "react";
import './WalletContainer.css';

const WalletContainer = ({ isConnected, loadWeb3Modal, logoutOfWeb3Modal }) => {

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
  return (
    <section className='wallet-container'>
      <h3 className='balance'>PLAY:  0</h3>
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
