import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  LocationTextWrapper,
  LocationContainer,
  LocationWrapper,
} from "./LocationStyle";
import {
  ButtonWrapper,
  TitleButton
} from "../Hero/HeroStyle";
import { LocationText } from "../SectionConstant";

interface LocationSectionProps {
  sectionNumber: number;
}

function LocationSection(props: LocationSectionProps) {
  const { sectionNumber } = props;
  return (
    <SectionBlock sectionNumber={sectionNumber} id="location">
      {{
        content: LocationContent
      }}
    </SectionBlock>
  );
}

const LocationContent: React.FC = () => {
  return (
    <LocationContainer>
      <LocationWrapper>
        <LocationTextWrapper>{LocationText}</LocationTextWrapper>
        <ButtonWrapper>
                <TitleButton
                    onClick={() => {
                        window.location.href = "https://whova.com/portal/rowdy_202102/";
                    }}
                >
                    Download Whova
                </TitleButton>
          </ButtonWrapper>
      </LocationWrapper>
    </LocationContainer>
  );
};

export default LocationSection;
