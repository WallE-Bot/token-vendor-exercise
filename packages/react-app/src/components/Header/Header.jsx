import React from "react";
import './Header.css';
import { Logo, Title, WalletContainer } from '../../components';

const Header = ({ isConnected, loadWeb3Modal, logoutOfWeb3Modal }) => {

  return (
      <header>
        <Logo />
        <Title />
        <WalletContainer
          isConnected={isConnected}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
      </header>
  );
}

export default Header;
