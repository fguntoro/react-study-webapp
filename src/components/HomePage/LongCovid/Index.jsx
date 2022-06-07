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
import { default as InfoRowIntermit } from "./Intermit/index";
import { default as InfoRowAbility } from "./Ability/index";
import { default as InfoRowActivity } from "./Activity/index";
import { default as InfoRowDescribe } from "./Describe/index";
import { default as InfoRowSymptoms } from "./Symptoms/index";

import {
  getSum,
  collapseContinuous,
  recodeNA,
  recode,
  compileData,
} from "../../utils/dataManipulation";

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

const propsAbility = {
  id: "propsAbility",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "Long COVID Symptoms",
  headLine: "Ability Reduction",
  description:
    "How much, if at all, does your 'long COVID' symptoms reduce your ability to carry out day-to-day activities?",
  imgStart: true,
  alt: "propsAbility",
  dark: true,
  primary: true,
};

const propsActivity = {
  id: "propsActivity",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Activity Reduction",
  description:
    "How much, if at all, does your 'long COVID' symptoms reduce the amount or kind of activities that you can do",
  imgStart: true,
  alt: "propsActivity",
  dark: true,
  primary: true,
};

const propsDescribe = {
  id: "propsDescribe",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Long Covid?",
  description:
    "Would you describe yourself as having 'long COVID' symptoms lasting at least 4 weeks after you first had COVID-19?",
  imgStart: true,
  alt: "propsDescribe",
  dark: true,
  primary: true,
};

const propsIntermit = {
  id: "propsIntermit",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Long COVID Frequency",
  description: "How often do you exhibit long COVID symptoms?",
  imgStart: true,
  alt: "propsIntermit",
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
  headLine: "Long COVID Symptoms",
  description: "Which of these symptoms were part of your Long COVID illness?",
  imgStart: true,
  alt: "propsSymptoms",
  dark: true,
  primary: true,
};

const var_symptoms = [];
for (var i = 1; i <= 14; i++) {
  var_symptoms.push(`covidsym2_${i}`);
}
for (var i = 1; i <= 11; i++) {
  var_symptoms.push(`covidsym3_${i}`);
}
const var_symptoms_filtered = var_symptoms.filter(function (value) {
  return ![
    "covidsym2_11",
    "covidsym3_10",
    "covidsym2_12",
    "covidsym3_11",
  ].includes(value);
});

const Section = ({ data, variable }) => {
  const [dataIntermit, setDataIntermit] = useState(data.longintermit);
  const [dataAbility, setDataAbility] = useState(data.longcovidability);
  const [dataActivity, setDataActivity] = useState(data.longcovidactiv);
  const [dataDescribe, setDataDescribe] = useState(data.longcoviddesc);
  const [dataSymptoms, setDataSymptoms] = useState(null);

  useEffect(() => {
    if (data.longintermit !== undefined && data.longintermit !== null) {
      setDataIntermit(recodeNA(data.longintermit));
    }
    if (data.longcovidability !== undefined && data.longcovidability !== null) {
      setDataAbility(recodeNA(data.longcovidability));
    }
    if (data.longcovidactiv !== undefined && data.longcovidactiv !== null) {
      setDataActivity(recodeNA(data.longcovidactiv));
    }
    if (data.longcoviddesc !== undefined && data.longcoviddesc !== null) {
      setDataDescribe(recodeNA(data.longcoviddesc));
    }
    if (data.covidsym2_1 !== undefined) {
      setDataSymptoms(compileData(data, var_symptoms_filtered));
    }
  }, [data]);

  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowIntermit
            {...propsIntermit}
            data={dataIntermit}
            variable={variable}
          />
          <InfoRowAbility
            {...propsAbility}
            data={dataAbility}
            variable={variable}
          />
          <InfoRowActivity
            {...propsActivity}
            data={dataActivity}
            variable={variable}
          />
          <InfoRowDescribe
            {...propsDescribe}
            data={dataDescribe}
            variable={variable}
          />
          <InfoRowSymptoms
            {...propsSymptoms}
            data={dataSymptoms}
            variable={variable}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Section;
