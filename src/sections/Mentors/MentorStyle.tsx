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
`;

const MentorCardContainer = styled.div`
  width: 300px;
  height: 370px;
  background-color: #7576BB;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.75);
  position: relative;
  padding-top: 20px;
  margin-right: 20px;
`;

const MentorCardStar = styled.img`
  position: absolute;
  top: 14px;
  left: 14px;
  width: 40px;
  height: 40px;
`;

const MentorCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 158px;
  background-color: #312E5F;
  border-radius: 0px 0px 15px 15px;
`;

const MentorHeadshot = styled.img`
  top: 100px;
  width: 150px;
  height: 150px;
  border: 3px solid #312E5F;
  display: block;
    margin-left: auto;
    margin-right: auto;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;  
`;

const MentorName = styled.div`
  font-size: 32px;
  font-weight: 700;
  font-family: Open Sans;
  font-color: #F9D564;
  padding-top: 5px;
  margin-bottom: 10px;
`;

const MentorDescription = styled.div`
  padding-right: 5px;
  padding-left: 5px;
  font-size: 16px;
  font-weight: 700;
  font-family: Open Sans;
`;

export {
  MentorContentWrapper,
  MentorCardContainer,
  MentorCardBottom,
  MentorCardStar,
  MentorHeadshot,
  MentorName,
  MentorDescription
};
