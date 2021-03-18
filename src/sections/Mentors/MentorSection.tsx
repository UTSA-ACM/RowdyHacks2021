import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MentorSlider.css";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  MentorContentWrapper,
  MentorCardContainer,
  MentorCardBottom,
  MentorCardStar,
  MentorHeadshot,
  MentorName,
  MentorDescription,
  CarouselContainer
} from "./MentorStyle";
import useWindowWidth from "../../hooks/useWindowWidth";

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
    description: "I am a Software Engineer currently working at Amazon. I am also a Google Summer of Code Mentor.",
    //description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
    link: "https://twitter.com/howdevelop"
  },
  {
    name: "Jesus del Valle",
    headshot: "Jesus_mic_right2left",
    fileType: "png",
    description: "Originally from Havana, Cuba, he obtained his PhD in Biology at the Free University in Berlin. He currently leads the Stranger Things Team at Bayer Pharmaceuticals R&D Open Innovation.",
    link: "https://www.linkedin.com/in/yeysus/"
  },
  {
    name: "Serenity Fox",
    headshot: "default",
    fileType: "png",
    description: "I am from Houston and am currently attending the University of Colorado majoring in CS. I am a part of Women Who Code and volunteer with my local chapter. In my spare time I like to sew and play video games."
  },
  {
    name: "Kevin J Nguyen",
    headshot: "default",
    fileType: "png",
    description: "Texas A&M Graduate. I enjoy Python.",
    link: "https://linkedin.com/in/kevinj97"
  }
];

const MentorCard: React.FC = () => {
  const screenWidth = useWindowWidth();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth <= 950 ? 1 : 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
      <CarouselContainer>
        <Slider {...settings}>
          {mentorsList.map(mentor => {
          const { name, headshot, fileType, description, link} = mentor;
          return (
            <MentorCardContainer>
              <MentorCardStar src={require("../../static/star_3.svg")}/>
              <a href={link} key={name + "-mentor"}>
                  <MentorHeadshot
                    key={name + "Image"}
                    src={require("../../static/MentorHeadshots/" +
                      headshot +
                      "." +
                      fileType)}
                    alt={name}
                  />
              </a>
              <MentorName>{name}</MentorName>
              <MentorCardBottom>
                <MentorDescription>{description}</MentorDescription>
              </MentorCardBottom>
            </MentorCardContainer>
          );
        })}
        </Slider>
     </CarouselContainer>
  );
};

export default MentorSection;
