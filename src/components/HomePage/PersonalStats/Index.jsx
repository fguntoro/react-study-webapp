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
import { default as InfoRowAge } from "./AgeGroup/index";
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
  id: "propsGender",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Gender",
  description: "Which one of the following best describes your gender?",
  imgStart: true,
  alt: "propsGender",
  dark: true,
  primary: true,
  xAxisLabel: "Gender",
};

const propsAge = {
  id: "propsAge",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Age Groups",
  description: "Age recoded into groups",
  imgStart: true,
  alt: "propsAge",
  dark: true,
  primary: true,
  xAxisLabel: "Age Group",
};

const propsEthnic = {
  id: "propsEthnic",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Ethnicity",
  description:
    "which one fo the following best describes your ethnic group or background?",
  imgStart: true,
  alt: "propsEthnic",
  dark: true,
  primary: true,
  xAxisLabel: "Ethnicity",
};

const code_ethnic = {
  white: [1, 2, 3, 4],
  mixed: [5, 6, 7, 8],
  asian: [9, 10, 11, 12, 13],
  black: [14, 15, 16],
  other: [17, 18, 20],
  na: [19, -92, -91, -77],
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

const PersonalStats = ({ data, variable }) => {
  const [dataEthnic, setDataEthnic] = useState(data.ethnic);

  useEffect(() => {
    setDataEthnic(recode_ethnic(data.ethnic));
  }, [data]);

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
            data={dataEthnic}
            variable={variable}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default PersonalStats;
