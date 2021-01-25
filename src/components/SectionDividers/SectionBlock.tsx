import React from "react";

import {
  Divider,
  DividerContent,
  DividerFooter,
  DividerMargin,
  DividerTitleWrapper,
  DividerTitleImage,
  DividerTitleText
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
        main: "#080821",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0,
        zindex: 5
      }
    },
    {
      theme: {
        main: "#027380",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: ((170 * screenWidth) / 1988) * -1,
        zindex: 4
      }
    },
    {
      // FAQ
      theme: {
        main: "#080821",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0, //((170 * screenWidth) / 1988) * -1,
        zindex: 3
      }
    },
    {
      // Location
      theme: {
        main: "#080821",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0, //((170 * screenWidth) / 1988) * -1,
        zindex: 2
      }
    },
    {
      theme: {
        mainImage: "linear-gradient(to bottom, #cbebe8, #5faa86)",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0,
        zindex: 4
      }
    },
    // Social
    { theme: { main: "#080821", zindex: 1 } },
    {
      // Partner
      theme: { 
        main: "#080821",
        src: "bar-dark-purple",
        altName: "darkpurpleBanner",
        margin: 0, //((170 * screenWidth) / 1988) * -1,
        zindex: 0
      }
    },
    { theme: { main: "#080821", margin: ((170 * screenWidth) / 1988) * -1 } },

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