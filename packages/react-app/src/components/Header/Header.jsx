import React from "react";
import './Header.css';
import { Logo, Title, WalletContainer } from '../../components';

const Header = ({
    isConnected,
    loadWeb3Modal,
    logoutOfWeb3Modal,
    userPLAYBalance
  }) => {

  return (
      <header>
        <Logo />
        <Title />
        <WalletContainer
          isConnected={isConnected}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
          userPLAYBalance={userPLAYBalance}
        />
      </header>
  );
}

export default Header;
