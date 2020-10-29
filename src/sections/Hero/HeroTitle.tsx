import React from "react";
import {ButtonWrapper, DateWrapper, HeroTitleWrapper, TitleButton, TitleWrapper} from "./HeroStyle";
import useWindowWidth from "../../hooks/useWindowWidth";

function HeroTitle() {
    const screenWidth = useWindowWidth();

    const middleScreenWidth = () => {
        const width = (screenWidth - (870 - (20 - letterSpacing()) * 9)) / 2;
        if (width < 0) return 0;
        return width;
    };

    const letterSpacing = () => {
        return (screenWidth * 20) / 1851;
    };

    const fontSize = (fontSize: number) => {
        if (screenWidth < 1100) return (fontSize * screenWidth) / 1100;
        else return fontSize;
    };

    return (
        <HeroTitleWrapper {...{theme: {margin: middleScreenWidth()}}}>
            <TitleWrapper
                {...{
                    theme: {letterSpacing: letterSpacing(), fontSize: fontSize(100)}
                }}
            >
                {"ROWDYHACKS 2021"}
            </TitleWrapper>
            <DateWrapper {...{theme: {fontSize: fontSize(30)}}}>
                {"INFORMATION COMING SOON"}
            </DateWrapper>
            <ButtonWrapper>
                <TitleButton
                    onClick={() => {
                        window.location.href = "http://eepurl.com/gGfz3n";
                    }}
                >
                    Subscribe to our Mailing List
                </TitleButton>
                <TitleButton
                    onClick={() => {
                        window.location.href = "https://drive.google.com/file/d/1uiZf6cpBszSaD4IGlqAy9uvq3iWqZ5gG/view?usp=sharing";
                    }}
                >
                    Our Sponsorship packet
                </TitleButton>
                {/*<TitleButton*/}
                {/*  onClick={() => {*/}
                {/*    window.location.href = "https://rowdyhacks.typeform.com/to/ImTIU6";*/}
                {/*  }}*/}
                {/*>*/}
                {/*  Apply to be a volunteer/mentor!*/}
                {/*</TitleButton>*/}
                {/*<TitleButton*/}
                {/*  onClick={() => {*/}
                {/*    window.location.href = "https://apply.rowdyhacks.io/login.html";*/}
                {/*  }}*/}
                {/*>*/}
                {/*  Check your profile!*/}
                {/*</TitleButton>*/}
            </ButtonWrapper>
        </HeroTitleWrapper>
    );
}

export default HeroTitle;
