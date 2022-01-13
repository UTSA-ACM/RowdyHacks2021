import styled from "styled-components";

interface NavBarProps {
  scrolledDown: boolean;
}

const NavBarTheme = styled.nav<NavBarProps>`
  position: static;
  width: 100vw;
  height: 70px;
  transition: all 200ms ease;
  z-index: 100;
  background-color: ${({ scrolledDown }) =>
    scrolledDown ? "#524797" : "#0c0c30"};
`;

interface NavBarMarginProps {
  size: number;
}

const NavBarMargin = styled.div<NavBarMarginProps>`
  display: flex;
  height: ${({ size }) => size}px;
  z-index: -1;
`;

const NavTextContainer = styled.span`
  color: ${props => props.theme};
`;

const Home = styled.a`
  text-decoration: none;
  display: flex;
`;

const LogoImage = styled.img`
  max-width: 60px;
  max-height: 60px;
  @media (max-width: 800px) {
    margin-top: 5px;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 50px 10px 30px;
  @media (max-width: 800px) {
    padding: 0px 10px 0px 10px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-right: 150px;
`;

const MenuItemContainer = styled.a`
  text-decoration: none;
  float: left;
  padding: 0px 10px;
  transition: opacity 250ms ease-in-out 0s;
  cursor: pointer;
  @media (max-width: 800px) {
    margin: 25px 0px;
  }
`;

const UnstyledButton = styled.button`
  text-decoration: none;
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 650;
  display: flex;
  bottom: 25px;
`;

export {
  NavTextContainer,
  Home,
  NavBarTheme,
  LogoImage,
  NavBarContainer,
  NavBarMargin,
  MenuList,
  MenuItemContainer,
  UnstyledButton
};
