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
import { default as InfoRowUrban } from "./Urban/index";
import { default as InfoRowHouseholdSize } from "./HouseholdSize/index";
import { default as InfoRowEmployment } from "./Employment/index";


const propsMain = {
  id: "workStatus",
  lightBg: false,
  topLine: "",
  headLine: "Home and Work Status",
  description: "Sex, Age Groups, Ethnicity, Education, Smoking, Accommodation",
  imgStart: true,
  alt: "workStatus",
  dark: true,
  primary: true,
};

const propsUrban = {
  id: "propsUrban",
  lightBg: true,
  lightText: true,
  darkText: false,
  lightTextDesc: true,
  topLine: "Home and Work Status",
  headLine: "Lives in urban",
  description: "",
  imgStart: true,
  alt: "propsUrban",
  dark: true,
  primary: true,
};

const propsHouseholdSize = {
  id: "propsHouseholdSize",
  lightBg: true,
  lightText: true,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Household Size",
  description: "",
  imgStart: true,
  alt: "propsHouseholdSize",
  dark: true,
  primary: true,
};

const propsEmployment = {
  id: "employment",
  lightBg: true,
  lightText: true,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Employment",
  description: "",
  imgStart: true,
  alt: "propsEmployment",
  dark: true,
  primary: true,
};

const WorkStatus = ({ data }) => {
  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          {/* <InfoRowUrban {...propsUrban} data={data.urban} /> */}
          <InfoRowHouseholdSize {...propsHouseholdSize} data={data.nadults} />
          <InfoRowEmployment {...propsEmployment} data={data.empl} />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default WorkStatus;

