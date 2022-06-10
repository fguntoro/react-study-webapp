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
import { default as InfoRowShielding1 } from "./Shielding1/index";
import { default as InfoRowShielding2 } from "./Shielding2/index";
import { default as InfoRowFaceCov } from "./FaceCov/index";
import { default as InfoRowIndoorMask } from "./IndoorMask/index";
import {
  getSum,
  collapseContinuous,
  recodeNA,
  recode,
} from "../../utils/dataManipulation";

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

const propsShielding1 = {
  id: "Shielding1",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Shielding1",
  description:
    "Do you consider yourself to be at risk of severe illness for COVID-19?",
  imgStart: true,
  alt: "Shielding1",
  dark: true,
  primary: true,
  xAxisLabel: "At Risk of Severe Illness",
};

const propsShielding2 = {
  id: "Shielding2",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Shielding2",
  description:
    "Are you shielding or taking specific precautions because you are concerned that you will become severely ill with COVID-19?",
  imgStart: true,
  alt: "Shielding2",
  dark: true,
  primary: true,
  xAxisLabel: "Shielding/ Taking Specific Precautions",
};

const propsFaceCov = {
  id: "FaceCov",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Face Covering",
  description:
    "Whether you mainly wear any kind of face covering or mask when you are outside of the home because of COVID-19?",
  imgStart: true,
  alt: "FaceCov",
  dark: true,
  primary: true,
  xAxisLabel: "Wearing Face Covering Outdoors",
};

const propsIndoorMask = {
  id: "IndoorMask",
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "",
  headLine: "Indoor Mask",
  description: "How often do you wear any kind of face covering or mask indoors?",
  imgStart: true,
  alt: "IndoorMask",
  dark: true,
  primary: true,
};

const Section = ({ data, variable }) => {
    const [dataFaceCov, setDataFaceCov] = useState(data.face_cov);
        const [dataIndMask, setDataIndMask] = useState(data.indmask);

  useEffect(() => {
    if (data.face_cov !== undefined && data.face_cov !== null) {
      setDataFaceCov(recodeNA(data.face_cov));
    }
        if (data.indmask !== undefined && data.indmask !== null) {
          setDataIndMask(recodeNA(data.indmask));
        }
  }, [data]);


  return (
    <>
      <InfoContainer lightBg={propsMain.lightBg} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowShielding1
            {...propsShielding1}
            data={data.shield1}
            variable={variable}
          />
          <InfoRowShielding2
            {...propsShielding2}
            data={data.shield2}
            variable={variable}
          />
          <InfoRowFaceCov
            {...propsFaceCov}
            data={dataFaceCov}
            variable={variable}
          />
          {/* <InfoRowIndoorMask
            {...propsIndoorMask}
            data={dataIndMask}
            variable={variable}
          /> */}
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Section;
