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
  },
  {
    name: "Rakshaa Viswanathan",
    headshot: "Rakshaa-Viswanathan",
    fileType: "jpg",
    description: "I hail from Chennai, India. I am in my junior year doing Electrical and Electronics Engineering. I am primarily a web developer with an interest in AI and IoT. My hobbies include dancing, singing, making goofy projects, and reading fiction. My favorite programming language is C++.",
    link: "https://www.linkedin.com/in/rakshaa-viswanathan-0aa891199"
  },
  {
    name: "Jesse Hu",
    headshot: "Jesse-Hu",
    fileType: "png",
    description: "I'm a student at the University of Washington. I'm deeply interested tech and am passionate about hackathons. I also enjoy building projects for the social good and the greater community. My favorite programming language is Python. Outside of class, I like to swim, practice karate and play the violin.",
    link: "https://www.linkedin.com/in/jessehu312"
  },
  {
    name: "Krish Munot",
    headshot: "Krish-Munot",
    fileType: "jpg",
    description: "Self Taught engineer, 2x Startup Founder, Hacker at heart, Currently a Product Manager at a cool startup taking things from 0 to 1. Love to go solo backpacking, board game enthusiast, and likes petting every dog I come across.",
    link: "https://linkedin.com/in/krishmunot"
  },
  {
    name: "Sreekaran Srinath",
    headshot: "Sreekaran-Srinath",
    fileType: "png",
    description: "I'm a 21-yo Software Engineer based out of Chennai, IN. I enjoy building things, anime, sports, reading, and all things tech! I'm a SWE Intern at ZohoCorp, AngelHack Ambassador, MLH Mentor, and serial hacker :) I'm active on Twitter(@sk4rn), so if you want to reach me, my DMs are always open!",
    link: "https://twitter.com/sk4rn"
  },
  {
    name: "Pavithraa Panchatcharam",
    headshot: "Pavithraa-Panchatcharam",
    fileType: "png",
    description: "After earning Bachelors in Computer Science from India, I worked for 3 years as a Developer and quit my job to explore my passion for Science. Currently a graduate student at Northeastern University, Boston. As an engineer, I love to see the impact of the work that we do create on real-life entities. I love to travel and sing.",
    link: "https://www.linkedin.com/in/pavithraa-panch/"
  },
  {
    name: "Deep Ramanayake",
    headshot: "Deep-Ramanayake",
    fileType: "jpg",
    description: "I am from Northern Kentucky and Teach at the Xavier University Cincinnati. I love to play CTF in any free time I have.",
    link: "https://www.linkedin.com/in/deep-r-31906010/"
  },
  {
    name: "Maggie Wang",
    headshot: "Maggie-Wang",
    fileType: "jpg",
    description: "I work at Google in San Francisco Bay Area. I love hackathons and I'm excited to help you build cool things together.",
    link: ""
  },
//   {
//     name: "Phicc",
//     headshot: "phicc",
//     fileType: "png",
//     description: "Phicc (He/Him/His, pronounced /fick/) is the most trusted rubber duckie known to mankind. He spends every waking day and night assigning programmers with the problems they face. Date of adoption: April 13t, 2019; Adoptive parent: Jada Ebong; Siblings: Bhicc, other rubber duckies. Besides his size, Phicc does nothing small.",
//     link: ""
//   },
  {
    name: "Adam McPherson",
    headshot: "Adam-McPherson",
    fileType: "png",
    description: "Graduating with a degree in Software Engineering I currently work at USAA working on the Interactive Voice Response system. I've been on the team for 2 years and learning how to maneuver the corporate landscape.  I really like learning new programming languages and working on my home lab! Favorite language is Clojure.",
    link: "https://www.linkedin.com/in/admcpherson"
  },
  {
    name: "Rishabh Shukla",
    headshot: "Rishabh-Shukla",
    fileType: "jpg",
    description: "I am a tech lover who dreams of doing great things with his C++ knowledge. I am a chapter leader at Change the Code, Hong Kong, Mentor at Script Winter of Code who believes in when one teaches two learn.",
    link: "https://www.linkedin.com/in/rishabh-shukla-69362b177/"
  },
  {
    name: "Sophia Kurihara",
    headshot: "default",
    fileType: "png",
    description: "Prior to being a Technical Writer at Figma, Sophie was a Software Development Instructor at Codeup. Her background is in Computer Science and UX Design. In Sophie's free time, she loves to write music and spend time outdoors.",
    link: "https://www.linkedin.com/in/sophiakurihara/"
  },
  {
    name: "Nishant Grover",
    headshot: "Nishant-Grover",
    fileType: "jpg",
    description: "A fellow UTSA alumni, who graduated with a Bachelors in Computer Science in 2017, and was highly active with the local ACM chapter at the time. Been a San Antonio local for about 9 years now. Currently employed with Accenture Federal Services as a Software Engineering Sr Analyst. Favorite hobbies includes painting and playing video games socially.",
    link: "https://www.linkedin.com/in/nishantgroverutsa"
  },
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
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const getNameSize = (name: string) => {
    // mobile/tablet
    if (screenWidth <= 950) {
      if (name.length >= 28) return 15;
      if (name.length >= 22) return 17;
      if (name.length >= 16) return 20;
      return 22;
    }
    if (name.length >= 28) return 16;
    if (name.length >= 22) return 20;
    if (name.length >= 16) return 24;
    return 32;
  };

  const getDescSize = (desc: string) => {
    if (desc.length > 250) return 14;
    if (desc.length > 230) return 14.5;
    if (desc.length > 200) return 15;
    return 16;
  };

  const getNamePadding = (name: string) => {
    if (name.length >= 28) return 18;
    if (name.length >= 22) return 15;
    if (name.length >= 16) return 10;
    return 5;
  }

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
              <MentorName {...{theme: {fontSize: getNameSize(name), padding: getNamePadding(name)}}}>{name}</MentorName>
              <MentorCardBottom>
                <MentorDescription {...{theme: {fontSize: getDescSize(description)}}}>{description}</MentorDescription>
              </MentorCardBottom>
            </MentorCardContainer>
          );
        })}
        </Slider>
     </CarouselContainer>
  );
};

export default MentorSection;
