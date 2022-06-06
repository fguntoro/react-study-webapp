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
import { default as InfoRowCaseContact } from "./CaseContact/index";
import { default as InfoRowContact } from "./Contact/index";
import { default as InfoRowContactPlace } from "./ContactPlace/index";
import { default as InfoRowLongCovid1 } from "./LongCovid1/index";

import {
  getSum,
  collapseContinuous,
  recodeNA,
  recode,
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

const propsCaseContact = {
  id: "propsCaseContact",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "COVID and Long COVID Symptoms",
  headLine: "Case Contact",
  description:
    "How many different people (not including members of your household) did you have contact with yesterday?",
  imgStart: true,
  alt: "propsCaseContact",
  dark: true,
  primary: true,
};

const propsContact = {
  id: "propsContact",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Contact",
  description: "Have you been in close contact with anyone with COVID-19?",
  imgStart: true,
  alt: "propsContact",
  dark: true,
  primary: true,
};

const propsContactPlace = {
  id: "propsContactPlace",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Contact Place",
  description: "Where did contact with confirmed COVID-19 case take place?",
  imgStart: true,
  alt: "propsContactPlace",
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

const propsLongCovid1 = {
  id: "propsLongCovid1",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Long Lasting Symptoms?",
  description:
    "Whether symptoms of COVID-19 lasted for more than four weeks in total?",
  imgStart: true,
  alt: "propsLongCovid1",
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

function compileData(data, variableArray) {
  var tmp = null;
  var key = null;
  var dataRow = null;
  var dataFinal = [];

  for (let i = 0; i < variableArray.length; i++) {
    key = variableArray[i];
    tmp = data[key].filter((d) => Object.values(d)[0] == 1);
    dataRow = {
      _row: key,
      positive: tmp[0].positive,
      total: tmp[0].total,
      uwt_prev: tmp[0].uwt_prev,
    };

    dataFinal.push(dataRow);
  }

  return dataFinal;
}

const Section = ({ data, variable }) => {
  const [dataCaseContact, setDataCaseContact] = useState(data.contact1);
  const [dataContact, setDataContact] = useState(null);
  const [dataContactPlace, setDataContactPlace] = useState(null);
  const [dataLongCovid1, setDataLongCovid1] = useState(data.longcovid1);

  useEffect(() => {
    if (data.contact1 !== undefined && data.contact1 !== null) {
      setDataCaseContact(collapseContinuous(data.contact1, 10));
    }
    if (data.longcovid1 !== undefined && data.longcovid1 !== null) {
      setDataLongCovid1(recodeNA(data.longcovid1));
    }
    if (
      data.covidcon_1 !== undefined &&
      data.covidcon_2 !== undefined &&
      data.covidcon_3 !== undefined
    ) {
      setDataContact(compileData(data, var_contact));
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
  }, [data]);

  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowCaseContact
            {...propsCaseContact}
            data={dataCaseContact}
            variable={variable}
          />
          <InfoRowContact
            {...propsContact}
            data={dataContact}
            variable={variable}
          />
          <InfoRowContactPlace
            {...propsContactPlace}
            data={dataContactPlace}
            variable={variable}
          />
          <InfoRowLongCovid1
            {...propsLongCovid1}
            data={dataLongCovid1}
            variable={variable}
          />
          {/* <InfoRowSymptoms {...propsSymptoms} data={data.symptoms_status} /> */}
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Section;
