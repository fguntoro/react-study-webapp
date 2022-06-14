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
} from "../Elements";
import { default as InfoRowAge } from "./AgeGroup/index";
import { default as InfoRowEthnic } from "./Ethnicity/index";
import { default as InfoRowGender } from "./Gender/index";
import { default as InfoRowEducation } from "../PersonalStats/Education/index";


import {
  recode,
} from "../../utils/dataManipulation";


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
  id: "propsGender",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Sex",
  description: "",
  imgStart: true,
  alt: "propsGender",
  dark: true,
  primary: true,
  xAxisLabel: "Gender",
};

const propsAge = {
  id: "propsAge",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Age Group",
  description: "",
  imgStart: true,
  alt: "propsAge",
  dark: true,
  primary: true,
  xAxisLabel: "Age Group",
};

const propsEthnic = {
  id: "propsEthnic",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Ethnicity",
  description:
    "What best describes your ethnic group or background?",
  imgStart: true,
  alt: "propsEthnic",
  dark: true,
  primary: true,
  xAxisLabel: "Ethnicity",
};


const propsEducation = {
  id: "Education",
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Education",
  description: "What is your highest educational qualification?",
  imgStart: true,
  alt: "propsEducation",
  dark: true,
  primary: true,
  xAxisLabel: "Education Level",
};

const code_ethnic = {
  white: [1, 2, 3, 4],
  mixed: [5, 6, 7, 8],
  asian: [9, 10, 11, 12, 13],
  black: [14, 15, 16],
  other: [17, 18, 20],
  na: [19, -92, -91, -77],
};


const code_education = {
  Degree: [1, 2],
  ALevel: [3],
  GCSE: [4, 5],
  Other: [6],
  No: [7],
  NA: [-92, -91, -77, 8],
};


function getSum(data, ethnicity, variable) {
  const tmp = data.filter((d) => code_ethnic[ethnicity].includes(d.ethnic));
  const sum = tmp
    .map((d) => d[variable])
    .reduce((previousVal, currentVal) => previousVal + currentVal, 0);

  return sum;
}

function recode_ethnic(data) {
  const recoded_data = [
    {
      ethnic: "Asian",
      positive: getSum(data, "asian", "positive"),
      total: getSum(data, "asian", "total"),
    },
    {
      ethnic: "Black",
      positive: getSum(data, "black", "positive"),
      total: getSum(data, "black", "total"),
    },
    {
      ethnic: "Mixed",
      positive: getSum(data, "mixed", "positive"),
      total: getSum(data, "mixed", "total"),
    },
    {
      ethnic: "Other",
      positive: getSum(data, "other", "positive"),
      total: getSum(data, "other", "total"),
    },
    {
      ethnic: "White",
      positive: getSum(data, "white", "positive"),
      total: getSum(data, "white", "total"),
    },
    {
      ethnic: "NA",
      positive: getSum(data, "na", "positive"),
      total: getSum(data, "na", "total"),
    },
  ];

  recoded_data.forEach(function (v) {
    v.uwt_prev = ((v.positive / v.total) * 100).toFixed(2);
  });

  return recoded_data;
}

const PersonalStats = ({ data, variable, themeDark }) => {
  const [dataEthnic, setDataEthnic] = useState(data.ethnic);
  const [dataEducation, setDataEducation] = useState(data.educ);

  useEffect(() => {
    setDataEthnic(recode_ethnic(data.ethnic));

    if (data.educ !== undefined && data.educ !== null) {
      setDataEducation(recode(data.educ, code_education));
    } else {
      setDataEducation(null);
    }
  }, [data]);

  return (
    <>
      <InfoContainer id="personalStats" themeDark={themeDark}>
        <InfoWrapper>
          <InfoRowGender
            {...propsGender}
            data={data.gender}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowAge
            {...propsAge}
            data={data.age_group}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowEthnic
            {...propsEthnic}
            data={dataEthnic}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowEducation
            {...propsEducation}
            data={dataEducation}
            variable={variable}
            themeDark={themeDark}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default PersonalStats;
