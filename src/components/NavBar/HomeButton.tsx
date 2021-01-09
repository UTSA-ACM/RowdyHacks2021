import React from "react";
import rowdyHacksLogo from "../../static/RH_21_Logo.svg";
import { LogoImage, Home } from "./NavBarStyle";

function HomeButton() {
  return (
    <Home href="/">
      <LogoImage src={rowdyHacksLogo} alt="rowdyHacksLogo" />
    </Home>
  );
}

export default HomeButton;
