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

import { default as InfoRowVaccinated } from "./Vaccinated/index";
import { default as InfoRowVaccineAccept } from "./VaccineAccept/index";
import { default as InfoRowVaccineApp2 } from "./VaccineApp2/index";
import { default as InfoRowVaccineDose } from "./VaccineDose/index";
import { default as InfoRowVaccineType } from "./VaccineType/index";

const props = {
  id: "precaution",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Precautionary Measures",
  description: "Shielding and Mask wearing",
  imgStart: true,
  alt: "precaution",
  dark: true,
  primary: true,
};

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

const propsVaccinated = {
  id: "Vaccinated",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Vaccinated",
  description: "Have you ever had a coronavirus vaccine?",
  imgStart: true,
  alt: "Vaccinated",
  dark: true,
  primary: true,
};

const propsVaccineAccept = {
  id: "VaccineAccept",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "VaccineAccept",
  description: "Would you accept a coronavirus vaccine if offered?",
  imgStart: true,
  alt: "VaccineAccept",
  dark: true,
  primary: true,
};

const propsVaccineApp2 = {
  id: "VaccineApp2",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "VaccineApp2",
  description: "Which of the following best describes your decision regarding being offered a coronavirus vaccine?",
  imgStart: true,
  alt: "VaccineApp2",
  dark: true,
  primary: true,
};

const propsVaccineDose = {
  id: "VaccineDose",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "VaccineDose",
  description: "How many doses of infections have you had so far?",
  imgStart: true,
  alt: "VaccineDose",
  dark: true,
  primary: true,
};

const propsVaccineType = {
  id: "VaccineType",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "VaccineType",
  description: "Which vaccine did you receive from healthcare provider?",
  imgStart: true,
  alt: "VaccineType",
  dark: true,
  primary: true,
};

const Section = ({ data, variable }) => {
  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowVaccinated
            {...propsVaccinated}
            data={data.vaccinated}
            variable={variable}
          />
          <InfoRowVaccineAccept
            {...propsVaccineAccept}
            data={data.vaccineaccept}
            variable={variable}
          />
          <InfoRowVaccineApp2
            {...propsVaccineApp2}
            data={data.vaccineapp2}
            variable={variable}
          />
          <InfoRowVaccineDose
            {...propsVaccineDose}
            data={data.vaccdose}
            variable={variable}
          />
          <InfoRowVaccineType
            {...propsVaccineType}
            data={data.vaccine_type}
            variable={variable}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Section;
