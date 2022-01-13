import React from "react";
import {
  HeroContainer,
  QuoteImage,
  HeroQuoteText,
  HeroQuoteAuthor
} from "./HeroStyle";
import { QuoteText, QuoteAuthor } from "../SectionConstant";
import HeroTitle from "./HeroTitle";
import heroHighlight from "../../static/quote_box.svg";

function Hero() {
  return (
    <>
      <HeroTitle />
      <HeroContainer>
        {/*<QuoteImage src={require("../../static/quote_box.svg")}/>*/}
        <QuoteImage
            src={heroHighlight}
            alt="Main Hero Quote Box"
        />
        <HeroQuoteText>{QuoteText}</HeroQuoteText>
        <HeroQuoteAuthor>{QuoteAuthor}</HeroQuoteAuthor>
      </HeroContainer>
    </>
  );
}

export default Hero;
