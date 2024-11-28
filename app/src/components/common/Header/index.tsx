import React from 'react';
import "./header.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from "../../../assets/logo.png";
import AnchorTemporaryDrawer from './drawer';
import Login from '../Button/Login';
import Signup from '../Button/Signup';

// Define types for the props passed to Login and Signup components, if needed.
interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Header(): JSX.Element {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="links">
        <Stack spacing={1} direction="row" className="links">
          {/* Text variant buttons for Markets, Trade, NFT Gallery, and Academy */}
          <Button variant="text" href="/markets" className="link">Markets</Button>
          {/* route path added by akshay */}
          <Button variant="text" href="/trade/bitcoin" className="link">Trade</Button>
          <Button variant="text" href="/" className="link">NFT Gallery</Button>
          <Button variant="text" href="/" className="link">Academy</Button>
          <Button variant="text" href="/" className="link">Rewards</Button>
          {/* Outlined button for Rewards */}
        </Stack>
        <a href="#"><Login text={"Login"} onClick={() => console.log("Btn Clicked")} /></a>
        <a href="#"><Signup text={"Signup"} onClick={() => console.log("Btn Clicked")} /></a>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
