import styled from "styled-components";

const DividerHeader = styled.div`
  width: 100%;
  background-image: linear-gradient(#ffffff, #333333);
  height: 12px;
  opacity: 50%;
`;

const DividerFooter = styled.img`
  width: 100%;
`;

const DividerMargin = styled.div`
  height: 5vh;
`;

const DividerContent = styled.div`
  display: flex;
  background: ${props => props.theme.main};
  padding-top: 70px;
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
  font-family: Helvetica;
  font-style: normal;
  font-weight: 400;
`;

const Divider = styled.section`
  display: flex;
  flex-direction: column;
`;

export {
  Divider,
  DividerHeader,
  DividerContent,
  DividerFooter,
  DividerMargin,
  SectionTitle,
  SectionContent,
  WhiteDividerContent
};