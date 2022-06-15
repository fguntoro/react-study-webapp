import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Button } from "react-native";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Box1,
  Box2,
  Box3,
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
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Prevalence",
  description:
    "Our REACT-1 study looked at how many people in England were infected with SARS-CoV-2 at specific points in time during the pandemic. The map here shows the weighted prevalence for each local authority area for 19 study rounds from May 2020 to March 2022.",
  buttonLabel: "Show timeline",
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
      <InfoContainer themeDark={themeDark} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Box1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading themeDark={themeDark}>{headLine}</Heading>
                <Subtitle themeDark={themeDark}>{description}</Subtitle>
              </TextWrapper>
            </Box1>
            <Box2>
              <LeafletMap center={mapCenter} zoom={mapZoom} />
            </Box2>
            <Box3>
              <BtnWrap>
                <Button title={buttonLabel} onPress={() => setShow(!show)} />
              </BtnWrap>
              <SafeAreaView style={{ Flex: 1 }}>
                <View style={styles.container}>
                  {show ? (
                    <LineChart width={500} height={300} />
                  ) : (
                    <svg width={0} height={0} />
                  )}
                </View>
              </SafeAreaView>
            </Box3>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const Prevalence = ({ themeDark }) => {
  const [mapCenter, setMapCenter] = useState({
    lat: 53,
    lng: -1,
  });
  const [mapZoom, setMapZoom] = useState(5);

  return (
    <>
      <InfoPage
        {...props}
        mapCenter={mapCenter}
        mapZoom={mapZoom}
        themeDark={themeDark}
      />
    </>
  );
};

export default Prevalence;
