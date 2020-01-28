import React from "react";
import {
  AboutTextBlock1,
  AboutTextBlock2,
  AboutTextBlock3
} from "../SectionConstant";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  AboutTitleWrapper,
  AboutContentWrapper,
  AboutContentTabWrapper,
  AboutContentImage,
  AboutContentDivider,
  AboutContainer
} from "./AboutStyle";

const AboutSection: React.FC = () => {
  return (
    <SectionBlock sectionNumber={0}>
      {{
        content: AboutContent
      }}
    </SectionBlock>
  );
};

const AboutContent: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitleWrapper>ABOUT</AboutTitleWrapper>
      <AboutContentWrapper>
        <AboutContentTab content={AboutTextBlock1} name={"Handshake"} />
        <AboutContentDivider />
        <AboutContentTab content={AboutTextBlock2} name={"People"} />
        <AboutContentDivider />
        <AboutContentTab content={AboutTextBlock3} name={"Circuit"} />
      </AboutContentWrapper>
    </AboutContainer>
  );
};

interface AboutDetails {
  content: string;
  name: string;
}

const AboutContentTab: React.FC<AboutDetails> = (props: {
  content: string;
  name: string;
}) => {
  const { content, name } = props;
  return (
    <AboutContentTabWrapper>
      <AboutContentImage
        src={require("../../static/" + name + ".png")}
        alt={name}
      />
      <span>{content}</span>
    </AboutContentTabWrapper>
  );
};
export default AboutSection;