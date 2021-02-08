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
        if (screenWidth < 720) return (fontSize * screenWidth) / 720;
        else return fontSize;
    };

    return (
        <HeroTitleWrapper {...{theme: {margin: middleScreenWidth()}}}>
            <TitleWrapper
                {...{
                    theme: {fontSize: fontSize(72)}
                }}
            >
                {"RowdyHacks VI"}
            </TitleWrapper>
            <DateWrapper {...{theme: {fontSize: fontSize(48)}}}>
                {"March 26-28 2021"}
            </DateWrapper>
            <ButtonWrapper>
                <TitleButton
                    onClick={() => {
                        window.location.href = "https://whova.com/portal/registration/rowdy_202102/";
                    }}
                >
                    Register
                </TitleButton>
            </ButtonWrapper>
        </HeroTitleWrapper>
    );
}

export default HeroTitle;
