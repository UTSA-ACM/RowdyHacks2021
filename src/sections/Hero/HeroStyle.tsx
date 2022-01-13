import styled from "styled-components";

const HeroBg = styled.img`
  width: 100%;
  display: flex;
  z-index: 10;
`;

const HeroContainer = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 5vw;
`;

const TitleWrapper = styled.div`
  font-size: ${props => props.theme.fontSize}px;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 20px;
  text-shadow: 3px 3px white, 0 0 20px;
  @media (max-width: 650px) {
    text-shadow: 2px 2px white, 0 0 20px;
  }
`;

const HeroTitleWrapper = styled.div`
  left: 0px;
  color: #F9D564;
  position: relative;
  z-index: 10;
  width: 100%;
  padding-bottom: 5%;
  @media (max-width: 1200px) {
    margin-bottom: 0px;
    padding-top: 50px;
  }

  @media (max-width: 1000px) {
    padding-top: 60px;
  }
`;

const HeroTitleContainer = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 50;
`;

const ButtonWrapper = styled.div`
  z-index: 50;
  padding: 2px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TitleButton = styled.button`
  margin: 10px 10px;
  background: #d7bfe1;
  border-width: 0;
  border-radius: 30px;
  height: 48px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 700;
  font-family: Poppins;
  max-width: 300px;
  cursor: pointer;
`;

const DateWrapper = styled.div`
  font-size: ${props => props.theme.fontSize}px;
  font-family: Poppins;
  font-weight: 500;
  text-shadow: 0 0 20px
`;

const QuoteImage = styled.img`
  height: 50vh;
  width: 50%;
  z-index: 10;
  @media (max-width: 950px) {
    width: 70%;
    padding-bottom: 8vw;
  }
  @media (max-width: 650px) {
    width: 80%;
    padding-bottom: 10vw;
  }
`;

const HeroQuoteText = styled.div`
  position: absolute;
  font-size: 2.1vw;
  font-family: Poppins;
  font-weight: 700;
  max-width: 24vw;
  top: 26%;
  left: 30%;
  @media (max-width: 950px) {
    font-size: 3.2vw;
    max-width: 38vw;
    top: 22%;
    left: 20%;
  }
  @media (max-width: 650px) {
    font-size: 3.8vw;
    max-width: 44vw;
    top: 22%;
    left: 15.5%;
  }
`;

const HeroQuoteAuthor = styled.div`
  position: absolute;
  font-size: 1.5vw;
  font-family: Poppins;
  font-weight: 700;
  max-width: 10vw;
  bottom: 25%;
  right: 27%;
  @media (max-width: 950px) {
    font-size: 2.4vw;
    max-width: 20vw;
    bottom: 33%;
    right: 14%;
  }
  @media (max-width: 650px) {
    font-size: 3.0vw;
    max-width: 17vw;
    bottom: 32%;
    right: 13%;
  }
`;

export {
  HeroBg,
  HeroContainer,
  TitleWrapper,
  TitleButton,
  HeroTitleContainer,
  HeroTitleWrapper,
  DateWrapper,
  ButtonWrapper,
  QuoteImage,
  HeroQuoteText,
  HeroQuoteAuthor
};
