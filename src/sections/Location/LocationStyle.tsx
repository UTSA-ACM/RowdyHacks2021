import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const LocationWrapper = styled.div`
  color: #4d4d4d;
  text-align: center;
  width: 50vw;
  padding: 2.5vh 2.5vw 2.5vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    width: 90vw;
    padding: 10px;
    align-items: center;
  }
`;

const LocationTitleWrapper = styled.div`
  font-family: Helvetica;
  font-weight: 700;
  font-size: 50px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 36px;
    text-align: center;
  }
`;

const LocationTitleDivider = styled.div`
  width: 200px;
  height: 5px;
  background: #4d4d4d;
  margin: 30px 0px;
  align-self: center;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

const LocationTextWrapper = styled.div`
  font-size: 20px;
  width: 40vw;

  @media (max-width: 800px) {
    width: 80vw;
    font-size: 14px;
  }
  text-align: center;
`;

const LocationImageWrapper = styled.img`
  width: 50vw;
  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export {
  LocationTitleWrapper,
  LocationTitleDivider,
  LocationTextWrapper,
  LocationImageWrapper,
  LocationContainer,
  LocationWrapper
};
