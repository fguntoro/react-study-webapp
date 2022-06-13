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
import { default as InfoRowCaseContact } from "./CaseContact/index";
import { default as InfoRowContact } from "./Contact/index";
import { default as InfoRowContactPlace } from "./ContactPlace/index";
import { default as InfoRowLongCovid1 } from "./LongCovid1/index";
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
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "COVID and Long COVID Symptoms",
  description: "7 Days symptoms and Long COVID symptoms",
  imgStart: true,
  alt: "covid",
  dark: true,
  primary: true,
};

const propsContact = {
  id: "propsContact",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  headLine: "Contact",
  description:
    "How many different people (not including members of your household) did you have contact with yesterday?",
  imgStart: true,
  alt: "propsContact",
  dark: true,
  primary: true,
  xAxisLabel: "Number of Contacts",
};

const propsCaseContact = {
  id: "propsCaseContact",
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Case Contact",
  description: "Have you been in close contact with anyone with COVID-19?",
  imgStart: true,
  alt: "propsCaseContact",
  dark: true,
  primary: true,
  xAxisLabel: "Contact with COVID Cases",
};

const propsContactPlace = {
  id: "propsContactPlace",
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Contact Place",
  description: "Where did contact with confirmed COVID-19 case take place?",
  imgStart: true,
  alt: "propsContactPlace",
  dark: true,
  primary: true,
  xAxisLabel: "Place of Contact",
};

const propsLongCovid1 = {
  id: "propsLongCovid1",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Long Lasting Symptoms?",
  description:
    "Whether symptoms of COVID-19 lasted for more than four weeks in total?",
  imgStart: true,
  alt: "propsLongCovid1",
  dark: true,
  primary: true,
  xAxisLabel: "Experiencing COVID symptoms",
};

const propsSymptoms = {
  id: "propsSymptoms",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "COVID Symptoms",
  description: "Which of these symptoms have you had in the last 7 days?",
  imgStart: true,
  alt: "propsSymptoms",
  dark: true,
  primary: true,
};

const var_contact = ["covidcon_1", "covidcon_2", "covidcon_3"];
const var_contactpl = [
  "covidconpl_1",
  "covidconpl_2",
  "covidconpl_3",
  "covidconpl_4",
  "covidconpl_5",
  "covidconpl_6",
];
const var_symptoms = [];
for (var i = 1; i <= 29; i++) {
  var_symptoms.push(`symptnowaw_${i}`);
}

const Section = ({ data, variable, themeDark }) => {
  const [dataContact, setDataContact] = useState(data.contact1);
  const [dataLongCovid1, setDataLongCovid1] = useState(data.longcovid1);
  const [dataCaseContact, setDataCaseContact] = useState(null);
  const [dataContactPlace, setDataContactPlace] = useState(null);
  const [dataSymptoms, setDataSymptoms] = useState(null);

  useEffect(() => {
    if (data.contact1 !== undefined && data.contact1 !== null) {
      setDataContact(collapseContinuous(data.contact1, 10));
    }
    if (data.longcovid1 !== undefined && data.longcovid1 !== null) {
      setDataLongCovid1(recodeNA(data.longcovid1));
    }
    if (
      data.covidcon_1 !== undefined &&
      data.covidcon_2 !== undefined &&
      data.covidcon_3 !== undefined
    ) {
      setDataCaseContact(compileData(data, var_contact));
    }
    if (
      data.covidconpl_1 !== undefined &&
      data.covidconpl_2 !== undefined &&
      data.covidconpl_3 !== undefined &&
      data.covidconpl_4 !== undefined &&
      data.covidconpl_5 !== undefined &&
      data.covidconpl_6 !== undefined
    ) {
      setDataContactPlace(compileData(data, var_contactpl));
    }
    if (data.symptnowaw_1 !== undefined) {
      setDataSymptoms(compileData(data, var_symptoms));
    }
  }, [data]);

  return (
    <>
      <InfoContainer themeDark={themeDark} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowContact
            {...propsContact}
            data={dataContact}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowCaseContact
            {...propsCaseContact}
            data={dataCaseContact}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowContactPlace
            {...propsContactPlace}
            data={dataContactPlace}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowLongCovid1
            {...propsLongCovid1}
            data={dataLongCovid1}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowSymptoms
            {...propsSymptoms}
            data={dataSymptoms}
            variable={variable}
            themeDark={themeDark}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Section;
