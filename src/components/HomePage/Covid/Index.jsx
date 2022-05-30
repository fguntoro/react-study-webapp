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
import { default as InfoRowCaseContact } from "./CaseContact/index";
import { default as InfoRowMask } from "./Mask/index";
import { default as InfoRowShielding } from "./Shielding/index";
import { default as InfoRowSymptoms } from "./Symptoms/index";

const propsMain = {
  id: "covid",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "COVID and Long COVID Symptoms",
  description: "7 Days symptoms and Long COVID symptoms",
  imgStart: true,
  alt: "covid",
  dark: true,
  primary: true,
};

const propsCaseContact = {
  id: "propsCaseContact",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "COVID and Long COVID Symptoms",
  headLine: "Case Contact",
  description: "",
  imgStart: true,
  alt: "propsCaseContact",
  dark: true,
  primary: true,
};

const propsMask = {
  id: "propsMask",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Mask",
  description: "",
  imgStart: true,
  alt: "propsMask",
  dark: true,
  primary: true,
};

const propsShielding = {
  id: "propsShielding",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Shielding",
  description: "",
  imgStart: true,
  alt: "propsShielding",
  dark: true,
  primary: true,
};

const propsSymptoms = {
  id: "propsSymptoms",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Symptoms",
  description: "",
  imgStart: true,
  alt: "propsSymptoms",
  dark: true,
  primary: true,
};

const Covid = ({ data }) => {
  console.log(data);
  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowCaseContact
            {...propsCaseContact}
            data={data.covid_case_contact}
          />
          <InfoRowMask {...propsMask} data={data.mask_wear} />
          <InfoRowShielding {...propsShielding} data={data.shielding} />
          <InfoRowSymptoms {...propsSymptoms} data={data.symptoms_status} />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Covid;
