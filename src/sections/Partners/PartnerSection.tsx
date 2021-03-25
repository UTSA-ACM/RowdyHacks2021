import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  GoldPartnerImage,
  SilverPartnerImage,
  BronzePartnerImage,
  OtherPartnerImage,
  PartnerContentWrapper,
  GoldPartnerContainer,
  SilverPartnerContainer,
  BronzePartnerContainer,
  OtherPartnerContainer,
  FooterContainer,
  Link
} from "./PartnerStyle";
import { FooterText, FooterText2 } from "../SectionConstant"
import { ButtonWrapper, TitleButton } from "../../sections/Hero/HeroStyle"

function PartnerSection() {
  return (
    <SectionBlock sectionNumber={6} id="partners">
      {{
        content: PartnerContent
      }}
    </SectionBlock>
  );
}

const goldPartners = [
  {
    name: "CivTechSA",
    fileType: "png",
    link: "https://www.civtech-sa.com/",
    bgColor: "#ffffff"
  },
  {
    name: "TechData",
    link: "https://www.techdata.com/",
    paddingTop: 30
  },
  {
    name: "FrostBank",
    fileType: "png",
    link: "https://www.frostbank.com/",
    bgColor: "#d7bfe1"
  },
];

const silverPartners = [
  {
    name: "Accenture",
    fileType: "png",
    link: "https://www.accenture.com/us-en"
  },
  {
    name: "UTSA_SDS",
    fileType: "png",
    link: "https://provost.utsa.edu/sds/"
  },
  {
    name: "NSA",
    fileType: "jpg",
    link: "https://www.nsa.gov/"
  },
  {
    name: "UTSA_CS",
    fileType: "png",
    link: "https://cs.utsa.edu/"
  },
];

const bronzePartners = [
  {
    name: "PwC",
    fileType: "svg",
    link: "https://www.pwc.com/",
    bgColor: "#ffffff"
  },
  {
    name: "UTSA_COS_01",
    fileType: "png",
    link: "https://www.utsa.edu/sciences/",
    bgColor: "#d7bfe1"
  },
  {
    name: "HCL",
    fileType: "png",
    link: "https://www.hcltech.com/",
    bgColor: "#d7bfe1"
  },
  {
    name: "HEB",
    fileType: "png",
    link: "https://www.heb.com/",
    bgColor: "#ffffff"
  }
];

const otherPartners = [
  {
    name: "UTSA_ISCS",
    link: "https://business.utsa.edu/information-systems-cyber-security/",
    fileType: "png",
    bgColor: "#000000"
  },
  {
    name: "UTSA_COE",
    link: "https://engineering.utsa.edu/",
    fileType: "png",
    bgColor: "#000000"
  },
  {
    name: "UTSA_Career_Center",
    link: "https://careercenter.utsa.edu/",
    fileType: "png",
    bgColor: "#000000"
  },
  {
    name: "MLH",
    link: "https://mlh.io/",
    fileType: "png",
    bgColor: "#000000"
  },
  {
    name: "TheCodex",
    link: "http://thecodex.me/",
    fileType: "png",
    bgColor: "#000000"
  },
];

const PartnerContent: React.FC = () => {
  return (
    <PartnerContentWrapper>
      <GoldPartnerSection />
      <SilverPartnerSection />
      <BronzePartnerSection />
      <OtherPartnerSection />

      <FooterContainer>
        {FooterText}
        <Link href="mailto:sponsorship@rowdyhacks.org" target="_blank">
          sponsorship@rowdyhacks.org
        </Link>
      </FooterContainer>

      <FooterContainer>
        {FooterText2}
        <Link href={"https://drive.google.com/file/d/13Qoj3DCyShSyV9VMJQ_MeSlzIWRs-WV2/view?usp=sharing"}>
          our sponsorship packet
        </Link>
      </FooterContainer>
    </PartnerContentWrapper>
  );
};

const GoldPartnerSection: React.FC = () => {
  return (
    <GoldPartnerContainer>
      {goldPartners.map(partner => {
        const { name, link } = partner;
        const padding =
          partner.paddingTop === undefined ? 0 : partner.paddingTop;
        return (
          <a href={link} key={name + "-partner"}>
            <div>
              <GoldPartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" + name + ".png")}
                alt={name}
                theme={{ padding: padding }}
              />
            </div>
          </a>
        );
      })}
    </GoldPartnerContainer>
  );
};

const SilverPartnerSection: React.FC = () => {
  return (
    <SilverPartnerContainer>
      {silverPartners.map(partner => {
        const { name, link, fileType } = partner;
        return (
          <a href={link} key={name + "-partner"}>
            <div>
              <SilverPartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" +
                  name +
                  "." +
                  fileType)}
                alt={name}
              />
            </div>
          </a>
        );
      })}
    </SilverPartnerContainer>
  );
};

const BronzePartnerSection: React.FC = () => {
  return (
    <BronzePartnerContainer>
      {bronzePartners.map(partner => {
        const { name, fileType, link, bgColor } = partner;
        return (
          <a
            href={link}
            style={{ minWidth: "120px", margin: "0px 15px" }}
            key={name + "-partner"}
          >
            <div>
              <BronzePartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" +
                  name +
                  "." +
                  fileType)}
                alt={name}
                theme={{ backgroundColor: bgColor }}
              />
            </div>
          </a>
        );
      })}
    </BronzePartnerContainer>
  );
};

const OtherPartnerSection: React.FC = () => {
  return (
    <OtherPartnerContainer>
      {otherPartners.map(partner => {
        const { name, link, fileType, bgColor } = partner;
        return (
          <a href={link} key={name + "-partner"}>
            <div>
              <OtherPartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" +
                  name +
                  "." +
                  fileType)}
                alt={name}
                theme={{ backgroundColor: bgColor }}
              />
            </div>
          </a>
        );
      })}
    </OtherPartnerContainer>
  );
};

export default PartnerSection;
