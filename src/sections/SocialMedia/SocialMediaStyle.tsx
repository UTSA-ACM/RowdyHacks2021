import styled from "styled-components";

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMediaTitleWrapper = styled.div`
  font-weight: 700;
  font-size: 55px;
  font-family: Open Sans;
  color: #ffffff;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    font-size: 42px;
    margin-bottom: 0px;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const CodeofConduct = styled.div`
  font-size: 18px;
  font-family: Open Sans;
  margin: 10px 0px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const Link = styled.a`
  margin: 10px;
`;

const SocialTextWrapper = styled.p`
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: Open Sans;
  @media (max-width: 800px) {
    font-size: 14px;
    width: 90vw;
  }
`;

const SocialTitleDivider = styled.div`
  width: 300px;
  height: 5px;
  background: #ffffff;
  margin: 30px 0px;
  align-self: center;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

export {
  SocialMediaWrapper,
  SocialMediaTitleWrapper,
  SocialTextWrapper,
  SocialTitleDivider,
  LogoContainer,
  CodeofConduct,
  Link
};
