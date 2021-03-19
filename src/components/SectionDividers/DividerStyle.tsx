import styled from "styled-components";

const DividerHeader = styled.div`
  width: 100%;
  background-image: linear-gradient(#ffffff, #333333);
  height: 12px;
  opacity: 50%;
`;

const DividerFooter = styled.img`
  width: 100%;
  max-height: 50px;
  z-index: 10;
`;

const DividerMargin = styled.div`
  display: flex;
  margin-top: ${props => props.theme.margin}px;
`;

const DividerContent = styled.div`
  display: flex;
  //padding-top: calc(${props => props.theme.margin}px * -1);
  ${props => (props.theme.main ? `background:${props.theme.main};` : "")}
  ${props =>
    props.theme.mainImage ? `background-image: ${props.theme.mainImage};` : ""}
  z-index: ${props => props.theme.zindex};
  flex-direction: column;
  align-items: center;
`;

const WhiteDividerContent = styled.div`
  display: flex;
`;

const SectionTitle = styled.div`
  font-family: parisplus-std, sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const SectionContent = styled.div`
  font-style: normal;
  font-weight: 400;
`;

const Divider = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: -30px;
`;

const DividerTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DividerTitleImage = styled.img`
  height: 360px;
  width: 360px;
  @media (max-width: 1050px) {
    height: 300px;
    width: 300px;
  }
  @media (max-width: 650px) {
    height: 240px;
    width: 240px;
  }
`;

const DividerTitleText = styled.div`
  position: absolute;
  text-align: center;
  vertical-align: middle;
  font-size: 42px;
  font-family: Poppins;
  font-weight: 700;
  height: ${props => props.theme.yOffset+50}px;
  transform: translateX(${props => props.theme.xOffset-50}px);
  @media (max-width: 1050px) {
    font-size: 34px;
    height: ${props => props.theme.yOffset+40}px;
  }
  @media (max-width: 650px) {
    font-size: 28px;
    height: ${props => props.theme.yOffset+30}px;
  }
`;

const DividerNavigation = styled.div`
  position: relative;
`;

export {
  Divider,
  DividerHeader,
  DividerContent,
  DividerFooter,
  DividerMargin,
  SectionTitle,
  SectionContent,
  WhiteDividerContent,
  DividerTitleWrapper,
  DividerTitleImage,
  DividerTitleText,
  DividerNavigation
};
