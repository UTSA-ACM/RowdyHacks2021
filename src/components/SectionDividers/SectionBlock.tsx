import React from "react";

import {
  Divider,
  DividerContent,
  DividerFooter,
  DividerMargin,
  DividerTitleWrapper,
  DividerTitleImage,
  DividerTitleText,
  DividerNavigation
} from "./DividerStyle";
import useWindowWidth from "../../hooks/useWindowWidth";

interface sectionProps {
  sectionNumber: number;
  id: string;
  children: {
    content: React.FC;
  };
}

function SectionBlock(props: sectionProps) {
  const { sectionNumber, id } = props;
  const { content } = props.children;
  const screenWidth = useWindowWidth();
  const sectionColors = [
    {
      // About
      theme: {
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0,
        zindex: 0//5
      }
    },
    {
      theme: {
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: ((170 * screenWidth) / 1988) * -1,
        zindex: 0//4
      }
    },
    {
      // FAQ
      theme: {
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0, //((170 * screenWidth) / 1988) * -1,
        zindex: 0//3
      }
    },
    {
      // Location
      theme: {
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0, //((170 * screenWidth) / 1988) * -1,
        zindex: 0//2
      }
    },
    {
      theme: {
        mainImage: "linear-gradient(to bottom, #cbebe8, #5faa86)",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0,
        zindex: 0//4
      }
    },
    // Social
    { theme: { zindex: 1 } },
    {
      // Partner
      theme: { 
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0, //((170 * screenWidth) / 1988) * -1,
        zindex: 0
      }
    },
    { theme: { margin: ((170 * screenWidth) / 1988) * -1 } },

    {
      // Schedule
      theme: {
        main: "#5faa86",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: ((170 * screenWidth) / 1988) * -1,
        zindex: 0
      }
    }
  ];

  const sectionTitleFormat = [
    {
      // About
      theme: {
        title: "About",
        src: "blob_1",
        topOffset: 23,
        leftOffset: 43,
      }
    },
    {
      theme: {
        title: "",
        topOffset: 0,
        leftOffset: 0
      }
    },
    {
      // FAQ
      theme: {
        title: "FAQ",
        src: "blob_2",
        topOffset: 27,
        leftOffset: 48,
      }
    },
    {
      // Location
      theme: {
        title: "Location",
        src: "blob_3",
        topOffset: 28,
        leftOffset: 44
      }
    },
    {
      theme: {
        title: "",
        topOffset: 0,
        leftOffset: 0
      }
    },
    {
      // Social
      theme: {
        title: "Follow Us",
        src: "blob_3",
        topOffset: 30,
        leftOffset: 43.5
      }
    },
    {
      // Partner
      theme: {
        title: "Sponsors",
        src: "blob_2",
        topOffset: 28,
        leftOffset: 45
      }
    },
    {
      theme: {
        title: "",
        topOffset: 0,
        leftOffset: 0
      }
    },
    {
      // Schedule
      theme: {
        title: "Schedule",
        src: "blob_1",
        topOffset: 32,
        leftOffset: 42.5
      }
    },
  ];

  const sectionTheme = sectionColors[sectionNumber];
  const sectionTitle = sectionTitleFormat[sectionNumber];

  return (
    <Divider id={id} key={id + "-section-" + sectionNumber}>
      <DividerNavigation id={`${id}-nav`}></DividerNavigation>
      {/*<DividerMargin {...sectionTheme} />*/}
      <DividerTitleWrapper>
        <DividerTitleImage src={require("../../static/" + sectionTitle.theme.src + ".svg")}/>
        <DividerTitleText {...sectionTitle}>{sectionTitle.theme.title}</DividerTitleText>
      </DividerTitleWrapper>
      <DividerContent {...sectionTheme}>
        {content({ children: null })}
      </DividerContent>
      {sectionTheme.theme.src === undefined ? (
        <DividerMargin />
      ) : null /*(
        <DividerFooter
          src={require("../../static/" + sectionTheme.theme.src + ".png")}
          alt={sectionTheme.theme.altName}
        />
      )*/}
    </Divider>
  );
}
export default SectionBlock;