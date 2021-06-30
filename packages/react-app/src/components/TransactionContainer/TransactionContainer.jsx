import React, { useState } from 'react';
import './TransactionContainer.css';

const TransactionContainer = () => {

  return (
    <div className='transaction-container'>
      <section className='transaction-panels'>
        <section className='panel buy'>
          BUY
        </section>
        <section className='panel transfer'>
          TRANSFER
        </section>
      </section>
      <section className='transaction-window'>

      </section>
    </div>
  );

}

export default TransactionContainer;
