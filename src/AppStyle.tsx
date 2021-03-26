import styled from "styled-components";
import bgStarLeft from "./static/background_stars_1.gif";
import bgStarRight from "./static/background_stars_1.gif";

const BackgroundTheme = styled.div`
  max-width: 100vw;
`;

const Holder = styled.div`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
`;

const StarBackground = styled.body`
  background: url(${bgStarLeft}) repeat-y left, url(${bgStarRight}) repeat-y right;
  background-size: 400px;
  @media (max-width: 800px) {
    background: none;
`;

export { BackgroundTheme, Holder, StarBackground };
