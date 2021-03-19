import styled from "styled-components";
import { getParseTreeNode } from "typescript";

const MentorContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding-bottom: 50px;
  margin-top: -100px;
  width: 100%;
  @media (max-width: 950px) {
    padding-bottom: 20px;
    margin-top: -20px;
  }
`;

const MentorCardContainer = styled.div`
  width: 300px;
  height: 370px;
  max-width: 300px;
  max-height: 370px;
  background-color: #7576BB;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 4px rgba(0, 0, 0, 0.75);
  padding-top: 20px;
  @media (max-width: 950px) {
    width: 220px;
    height: 270px;
    max-width: 220px;
    max-height: 270px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.75);
  }
`;

const MentorCardStar = styled.img`
  position: absolute;
  top: 12px;
  margin-left: 12px;
  width: 40px;
  height: 40px;
  @media (max-width: 950px) {
    top: 10px;
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }
`;

const MentorCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 157px;
  background-color: #312E5F;
  border-radius: 0px 0px 15px 15px;
  @media (max-width: 950px) {
    height: 120px;
  }
`;

const MentorHeadshot = styled.img`
  top: 100px;
  width: 150px;
  height: 150px;
  border: 3px solid #312E5F;
  object-fit: cover;
  display: block;
    margin-left: auto;
    margin-right: auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  @media (max-width: 950px) {
      height: 100px;
      width: 100px;
  } 
`;

const MentorName = styled.div`
  font-size: 28px;
  font-weight: 700;
  font-family: Open Sans;
  font-color: #F9D564;
  padding-top: 5px;
  margin-bottom: 10px;
  @media (max-width: 950px) {
    font-size: 22px;
  }
`;

const MentorDescription = styled.div`
  padding-right: 5px;
  padding-left: 5px;
  font-size: 14px;
  font-weight: 700;
  font-family: Open Sans;
  @media (max-width: 950px) {
    font-size: 12px;
  }
`;

const CarouselContainer = styled.div`
  width: 1000px;
  height: 450px;
  @media (max-width: 950px) {
    width: 250px;
    height: 350px;
  }
`;

export {
  MentorContentWrapper,
  MentorCardContainer,
  MentorCardBottom,
  MentorCardStar,
  MentorHeadshot,
  MentorName,
  MentorDescription,
  CarouselContainer
};
