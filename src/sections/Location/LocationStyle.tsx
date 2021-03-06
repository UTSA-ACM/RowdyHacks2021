import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const LocationWrapper = styled.div`
  color: white;
  text-align: center;
  padding: 2.5vh 2.5vw 2.5vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 90vw;
    padding: 10px;
  }
`;

const LocationTitleWrapper = styled.div`
  font-weight: 700;
  font-size: 55px;
  font-family: Open Sans;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    font-size: 42px;
    text-align: center;
  }
`;

const LocationTextWrapper = styled.div`
  font-size: 20px;
  font-family: Open Sans;
  @media (max-width: 800px) {
    font-size: 14px;
  }
  text-align: center;
`;

const LocationTitleDivider = styled.div`
  width: 200px;
  height: 5px;
  background: #ffffff;
  margin: 30px 0px;
  align-self: center;
  @media (max-width: 800px) {
    margin: 10px;
  }
`;

export {
  LocationTitleWrapper,
  LocationTextWrapper,
  LocationContainer,
  LocationWrapper,
  LocationTitleDivider
};
