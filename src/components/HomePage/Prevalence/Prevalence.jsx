import React, { useState } from "react";
import { Button } from "../../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./Elements";
import LeafletMap from "./LeafletMap/index";

const props = {
  id: "prevalence",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Prevalence",
  description:
    "Our REACT-1 study looked at how many people already had COVID-19...",
  buttonLabel: "Next",
  imgStart: true,
  alt: "prevalence",
  dark: true,
  primary: true,
};

const InfoPage = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headLine,
  description,
  buttonLabel,
  primary,
  dark,
  dark2,
  linkTo,
  mapCenter,
  mapZoom,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={-60}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <LeafletMap center={mapCenter} zoom={mapZoom} />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const Prevalence = () => {
  const [mapCenter, setMapCenter] = useState({
    lat: 53,
    lng: -1,
  });
  const [mapZoom, setMapZoom] = useState(5.5);

  return <InfoPage {...props} mapCenter={mapCenter} mapZoom={mapZoom} />;
};

export default Prevalence;
