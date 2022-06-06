import React, { useState, useEffect } from "react";
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
import { default as InfoRowHouseholdChildren } from "./HouseholdChildren/index";
import { default as InfoRowCarehome } from "./Carehome/index";
import { default as InfoRowEmployment } from "./Employment/index";
import { default as InfoRowEducation } from "./Education/index";
import { default as InfoRowCampus } from "./Campus/index";
import {getSum, collapseContinuous, recodeNA, recode} from "../../utils/dataManipulation"

const propsMain = {
  id: "workStatus",
  lightBg: true,
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
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Household Size",
  description:
    "Including yourself, how many adults aged 18 and over currently live in your household?",
  imgStart: true,
  alt: "propsHouseholdSize",
  dark: true,
  primary: true,
};

const propsHouseholdChildren = {
  id: "propsHouseholdChildren",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Household Children",
  description:
    "How many children or young people aged 0-17 years currently live in your household?",
  imgStart: true,
  alt: "propsHouseholdChildren",
  dark: true,
  primary: true,
};

const propsCarehome = {
  id: "propsCarehome",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Carehome",
  description: "Whether lives in a carehome?",
  imgStart: true,
  alt: "Carehome",
  dark: true,
  primary: true,
};

const propsCampus = {
  id: "Campus",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Campus",
  description: "Where are you currently living in campus?",
  imgStart: true,
  alt: "Campus",
  dark: true,
  primary: true,
};

const propsEmployment = {
  id: "employment",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Employment",
  description: "Current economic activity status?",
  imgStart: true,
  alt: "propsEmployment",
  dark: true,
  primary: true,
};

const propsEducation = {
  id: "Education",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Education",
  description: "What is your highest educational qualification?",
  imgStart: true,
  alt: "propsEducation",
  dark: true,
  primary: true,
};

const code_employment = {
  Employee: [1, 2],
  SelfEmployed: [3],
  Unemployed: [5],
  Retired: [6],
  Student: [7],
  Other: [8, 9, 10],
  NA: [-92, -91, -77]
};

const code_education = {
  Degree: [1, 2],
  ALevel: [3],
  GCSE: [4,5],
  Other: [6],
  No: [7],
  NA: [-92, -91, -77, 8],
};

const WorkStatus = ({ data, variable }) => {
  const [dataHouseholdSize, setDataHouseholdSize] = useState(data.nadults);
  const [dataHouseholdChildren, setDataHouseholdChildren] = useState(
    data.nchild
  );
  const [dataCarehome, setDataCarehome] = useState(data.carehome);
  const [dataEmployment, setDataEmployment] = useState(data.empl);
  const [dataEducation, setDataEducation] = useState(data.educ);

  useEffect(() => {
    if (data.nadults !== undefined && data.nadults !== null) {
      setDataHouseholdSize(collapseContinuous(data.nadults, 6));
    }

    if (data.nchild !== undefined && data.nchild !== null) {
      setDataHouseholdChildren(collapseContinuous(data.nchild, 4));
    }
    if (data.carehome !== undefined && data.carehome !== null) {
      setDataCarehome(recodeNA(data.carehome));
    }
    if (data.empl !== undefined && data.empl !== null) {
      setDataEmployment(recode(data.empl, code_employment));
    }
        if (data.educ !== undefined && data.educ !== null) {
          setDataEducation(recode(data.educ, code_education));
        }
  }, [data]);

  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          {/* <InfoRowUrban {...propsUrban} data={data.urban} /> */}
          <InfoRowHouseholdSize
            {...propsHouseholdSize}
            data={dataHouseholdSize}
            variable={variable}
          />
          <InfoRowHouseholdChildren
            {...propsHouseholdChildren}
            data={dataHouseholdChildren}
            variable={variable}
          />
          <InfoRowCarehome
            {...propsCarehome}
            data={dataCarehome}
            variable={variable}
          />
          {/* <InfoRowCampus
            {...propsCampus}
            data={data.campus2}
            variable={variable}
          /> */}
          <InfoRowEmployment
            {...propsEmployment}
            data={dataEmployment}
            variable={variable}
          />
          <InfoRowEducation
            {...propsEducation}
            data={dataEducation}
            variable={variable}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default WorkStatus;
