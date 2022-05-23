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
import LeafletMap from "./LeafletMap/index";
import LineChart from "./LineChart/index";

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
  buttonLabel: "Show",
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
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button title={buttonLabel} onPress={() => setShow(!show)} />
                </BtnWrap>
              </TextWrapper>
              <SafeAreaView style={{ Flex: 1 }}>
                <View style={styles.container}>
                  {show ? (
                    <LineChart width={500} height={300} />
                  ) : (
                    <svg width={500} height={300} />
                  )}
                </View>
              </SafeAreaView>
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

  return (
    <>
      <InfoPage {...props} mapCenter={mapCenter} mapZoom={mapZoom} />
    </>
  );
};

export default Prevalence;
