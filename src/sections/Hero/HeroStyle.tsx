import styled from "styled-components";

const RightAnimation = styled.img.attrs(props => ({
  style: {
    left: props.theme.dist + "px"
  }
}))`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  display: ${props => props.theme.display};
  margin-left: ${props => props.theme.margin}px;
`;

const LeftAnimation = styled.img.attrs(props => ({
  style: {
    right: props.theme.dist + "px"
  }
}))`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  display: ${props => props.theme.display};
  margin-right: ${props => props.theme.margin}px;
`;

const StillAnimation = styled.img`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  left: ${props => props.theme.dist}px;
  z-index: 12;
`;

const TurnedStillAnimation = styled.img`
  position: absolute;
  width: ${props => props.theme.width}px;
  top: ${props => props.theme.top}px;
  left: ${props => props.theme.dist}px;
  transform: scale(-1, 1);
  z-index: 12;
`;

const HeroBg = styled.img`
  width: 100%;
  display: flex;
  z-index: 10;
`;

export {
  RightAnimation,
  LeftAnimation,
  StillAnimation,
  TurnedStillAnimation,
  HeroBg
};