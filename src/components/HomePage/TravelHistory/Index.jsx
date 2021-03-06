import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Button } from "react-native";
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
import LineChart from "./LineChart/index";

const props = {
  id: "travelHistory",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Travel History",
  description: "Countries visited during COVID",
  imgStart: true,
  alt: "travelHistory",
  dark: true,
  primary: true,
};

const InfoPage = ({
  lightBg,
  id,
  imgStart,
  topLine,
  themeDark,
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
  const [show, setShow] = useState(false);

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      margin: 10,
    },
  });

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading themeDark={themeDark}>{headLine}</Heading>
                <Subtitle themeDark={themeDark}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <LineChart width={500} height={300} />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const RoundSummary = () => {
  const [mapCenter, setMapCenter] = useState({
    lat: 53,
    lng: -1,
  });
  const [mapZoom, setMapZoom] = useState(5.5);

  return (
    <>
      <InfoPage {...props} mapCenter={mapCenter} mapZoom={mapZoom} />
    </>
  );
};

export default RoundSummary;
