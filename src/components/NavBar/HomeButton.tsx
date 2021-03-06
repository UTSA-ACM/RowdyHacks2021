import React from "react";
import rowdyHacksLogo from "../../static/rowdyhacks21_SVG.png";
import { LogoImage, Home } from "./NavBarStyle";

function HomeButton() {
  return (
    <Home href="https://rowdyhacks.org">
      <LogoImage src={rowdyHacksLogo} alt="rowdyHacksLogo" />
    </Home>
  );
}

export default HomeButton;
