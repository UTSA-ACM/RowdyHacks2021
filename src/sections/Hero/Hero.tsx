import heroImage from "../../static/website-background.png";
import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import useTimer from "../../hooks/useTimer";
import {
  HeroBg,
  HeroContainer,
  QuoteImage,
  HeroQuoteText,
  HeroQuoteAuthor
} from "./HeroStyle";
import { QuoteText, QuoteAuthor } from "../SectionConstant";
import HeroTitle from "./HeroTitle";

function Hero() {
  const screenWidth = useWindowWidth();
  const time = useTimer();

  return (
    <>
      <HeroTitle />
      <HeroContainer>
        <QuoteImage src={require("../../static/quote_box.svg")}/>
        <HeroQuoteText>{QuoteText}</HeroQuoteText>
        <HeroQuoteAuthor>{QuoteAuthor}</HeroQuoteAuthor>
      </HeroContainer>
    </>
  );
}

export default Hero;
