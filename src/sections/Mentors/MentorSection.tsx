import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  MentorContentWrapper,
  MentorCardContainer,
  MentorCardBottom,
  MentorCardStar,
  MentorHeadshot,
  MentorName,
  MentorDescription
} from "./MentorStyle";
import { FooterText, FooterText2 } from "../SectionConstant"
import { ButtonWrapper, TitleButton } from "../Hero/HeroStyle"

function MentorSection() {
  return (
    <SectionBlock sectionNumber={9} id="mentors">
      {{
        content: MentorContent
      }}
    </SectionBlock>
  );
}

const MentorContent: React.FC = () => {
  return (
    <MentorContentWrapper>
      <MentorCard />
    </MentorContentWrapper>
  );
};

const mentorsList = [
  {
    name: "Shivay Lamba",
    headshot: "shivay_lamba",
    fileType: "png",
    //description: "I am a Software Engineer currently working at Amazon. I am also a Google Summer of Code Mentor.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
    link: "https://twitter.com/howdevelop"
  }
];

const MentorCard: React.FC = () => {
  return (
    <div>
      {mentorsList.map(mentor => {
        const { name, headshot, fileType, description, link} = mentor;
        return (
          <MentorCardContainer>
            <MentorCardStar src={require("../../static/star_3.svg")}/>
            <a href={link} key={name + "-mentor"}>
              <div>
                <MentorHeadshot
                  key={name + "Image"}
                  src={require("../../static/MentorHeadshots/" +
                    headshot +
                    "." +
                    fileType)}
                  alt={name}
                />
              </div>
            </a>
            <MentorName>{name}</MentorName>
            <MentorCardBottom>
              <MentorDescription>{description}</MentorDescription>
            </MentorCardBottom>
          </MentorCardContainer>
        );
      })}
    </div>
  );
};

export default MentorSection;
