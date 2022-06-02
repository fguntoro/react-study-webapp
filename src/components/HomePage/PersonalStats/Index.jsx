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
import InfoRowAge from "./AgeGroup/index";
import { default as InfoRowEthnic } from "./Ethnicity/index";
import { default as InfoRowGender } from "./Gender/index";

const propsMain = {
  id: "personalStats",
  lightBg: true,
  topLine: "",
  headLine: "Personal Statistics",
  description: "Sex, Age Groups, Ethnicity, Education, Smoking, Accommodation",
  imgStart: true,
  alt: "personalStats",
  dark: true,
  primary: true,
};

const propsGender = {
  id: "personalStats",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Gender",
  description: "",
  imgStart: true,
  alt: "personalStats",
  dark: true,
  primary: true,
};

const propsAge = {
  id: "propsAge",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Age Groups",
  description: "",
  imgStart: true,
  alt: "propsAge",
  dark: true,
  primary: true,
};

const propsEthnic = {
  id: "propsEthnic",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Ethnicity",
  description: "",
  imgStart: true,
  alt: "propsEthnic",
  dark: true,
  primary: true,
};

const PersonalStats = ({ data, variable }) => {
  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowGender
            {...propsGender}
            data={data.gender}
            variable={variable}
          />
          <InfoRowAge {...propsAge} data={data.age_group} variable={variable} />
          <InfoRowEthnic
            {...propsEthnic}
            data={data.ethnic}
            variable={variable}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default PersonalStats;
