import styled from "styled-components";
import { getParseTreeNode } from "typescript";

const GoldPartnerImage = styled.img`
  max-height: 230px;
  max-width: 440px;
  margin: 10px 30px;
  margin-top: 50px;
  padding-top: ${props => props.theme.padding}px;
  background-color: #d7bfe1;
  border-radius: 15px 50px;
  @media (max-width: 800px) {
    max-height: 115px;
    max-width: 220px;
    margin: 10px;
    padding-top: ${props => {
      return props.theme.padding / 2;
    }}px;
  }
`;

const GoldPartnerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`;

const SilverPartnerImage = styled.img`
  max-height: 190px;
  max-width: 370px;
  margin: 40px 20px 10px;
  background-color: #d7bfe1;
  border-radius: 15px 50px;
  @media (max-width: 800px) {
    margin: 15px 10px;
    max-height: 80px;
    max-width: 180px;
  }
`;

const SilverPartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1550px;
  @media (max-width: 800px) {
    margin: 0px 10px 15px;
  }
`;

const BronzePartnerImage = styled.img`
  max-height: 120px;
  min-height: 30px;
  min-width: 120px;
  max-width: 320px;
  margin: 25px 5px 5px;
  border-radius: 15px 50px;
  background-image: linear-gradient(to right, #7576BB, #d7bfe1);
  padding: 5px;
  @media (max-width: 800px) {
    max-height: 60px;
    max-width: 140px;
    min-height: 20px;
    min-width: 0px;
    margin: 10px 5px;
  }
`;
//background-color: ${props => props.theme.backgroundColor};

const BronzePartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 10px 10px;
  max-width: 1550px;
  @media (max-width: 800px) {
    margin: 15px;
  }
`;

const PartnerContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding-bottom: 20px;
  width: 100%;
`;

const PartnerTitleWrapper = styled.div`
  font-size: 55px;
  font-weight: 700;
  font-family: Open Sans;
  color: #ffffff;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    font-size: 42px;
  }
`;

const PartnerTitleDivider = styled.div`
  width: 450px;
  height: 5px;
  background: black;
  margin: 30px 0px;
  align-self: center;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

const OtherPartnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px 10px 30px;
  max-width: 1500px;
  @media (max-width: 800px) {
    margin: 15px;
  }
`;

const OtherPartnerImage = styled.img`
  max-height: 120px;
  max-width: 370px;
  margin: 20px 20px;
  padding: 20px;
  background-color: #d7bfe1;
  border-radius: 5px 25px;
  @media (max-width: 800px) {
    margin: 15px 10px;
    max-height: 80px;
    max-width: 180px;
  }
`;
//  background-color: ${props => props.theme.backgroundColor};

const FooterContainer = styled.p`
  width: 40vw;
  font-size: 18px;
  font-family: Open Sans;
  @media (max-width: 800px) {
    width: 90vw;
    font-size: 14px;
  }
`;

const Link = styled.a`
`;

export {
  GoldPartnerImage,
  SilverPartnerImage,
  BronzePartnerImage,
  OtherPartnerImage,
  PartnerContentWrapper,
  PartnerTitleWrapper,
  PartnerTitleDivider,
  GoldPartnerContainer,
  SilverPartnerContainer,
  BronzePartnerContainer,
  OtherPartnerContainer,
  FooterContainer,
  Link
};
