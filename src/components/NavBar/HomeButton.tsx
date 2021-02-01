import React from "react";
import rowdyHacksLogo from "../../static/rowdyhacks21_SVG.png";
import { LogoImage, Home } from "./NavBarStyle";

function HomeButton() {
  return (
    <Home href="/">
      <LogoImage src={rowdyHacksLogo} alt="rowdyHacksLogo" />
    </Home>
  );
}

export default HomeButton;
