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

import { default as InfoRowVaccinated } from "./Vaccinated/index";
import { default as InfoRowVaccineAccept } from "./VaccineAccept/index";
import { default as InfoRowVaccineApp2 } from "./VaccineApp2/index";
import { default as InfoRowVaccineDose } from "./VaccineDose/index";
import { default as InfoRowVaccineType } from "./VaccineType/index";
import {
  getSum,
  collapseContinuous,
  recodeNA,
  recode,
} from "../../utils/dataManipulation";

const props = {
  id: "precaution",
  lightBg: true,
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
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
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "Vaccinated",
  description: "Have you ever had a coronavirus vaccine?",
  imgStart: true,
  alt: "Vaccinated",
  dark: true,
  primary: true,
  xAxisLabel: "Vaccinated",
};

const propsVaccineAccept = {
  id: "VaccineAccept",
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "VaccineAccept",
  description: "Would you accept a coronavirus vaccine if offered?",
  imgStart: true,
  alt: "VaccineAccept",
  dark: true,
  primary: true,
  xAxisLabel: "Would Accept Vaccine",
};

const propsVaccineApp2 = {
  id: "VaccineApp2",
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "VaccineApp2",
  description:
    "Which of the following best describes your decision regarding being offered a coronavirus vaccine?",
  imgStart: true,
  alt: "VaccineApp2",
  dark: true,
  primary: true,
  xAxisLabel: "Decision Regarding Vaccination",
};

const propsVaccineDose = {
  id: "VaccineDose",
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "VaccineDose",
  description: "How many doses of infections have you had so far?",
  imgStart: true,
  alt: "VaccineDose",
  dark: true,
  primary: true,
  xAxisLabel: "Dose of Vaccine",
};

const propsVaccineType = {
  id: "VaccineType",
  themeDark: false,
  themeDark: true,
  themeDarkDesc: true,
  topLine: "",
  headLine: "VaccineType",
  description: "Which vaccine did you receive from healthcare provider?",
  imgStart: true,
  alt: "VaccineType",
  dark: true,
  primary: true,
  xAxisLabel: "Type of Vaccine",
};

const code_vaccinated = {
  Yes: ["yes"],
  No: ["no"],
};

const code_vaccineaccept = {
  Yes: [1],
  No: [2],
  Unknown: [3],
  NA: [-92, -91, -77],
};

const code_vaccineapp2 = {
  waiting: [1],
  no: [2],
  uncertain: [3],
  NA: [-92, -91, -77, 4],
};

const Section = ({ data, variable, themeDark }) => {
  const [dataVaccinated, setDataVaccinated] = useState(data.vaccinated);
  const [dataVaccineAccept, setDataVaccineAccept] = useState(
    data.vaccineaccept
  );
  const [dataVaccineApp2, setDataVaccineApp2] = useState(data.vaccineapp2);
  const [dataVaccDose, setDataVaccDose] = useState(data.vaccdose);

  useEffect(() => {
    if (data.vaccinated !== undefined && data.vaccinated !== null) {
      setDataVaccinated(recode(data.vaccinated, code_vaccinated));
    }
    if (data.vaccineaccept !== undefined && data.vaccineaccept !== null) {
      setDataVaccineAccept(recode(data.vaccineaccept, code_vaccineaccept));
    }
    if (data.vaccineapp2 !== undefined && data.vaccineapp2 !== null) {
      setDataVaccineApp2(recode(data.vaccineapp2, code_vaccineapp2));
    }
    if (data.vaccdose !== undefined && data.vaccdose !== null) {
      setDataVaccDose(recodeNA(data.vaccdose));
    }
  }, [data]);

  return (
    <>
      <InfoContainer themeDark={themeDark} id={propsMain.id}>
        <InfoWrapper>
          <InfoRowVaccinated
            {...propsVaccinated}
            data={dataVaccinated}
            variable={variable}
            themeDark={themeDark}
          />
          {/* <InfoRowVaccineAccept
            {...propsVaccineAccept}
            data={dataVaccineAccept}
            variable={variable} themeDark={themeDark}
          /> */}
          <InfoRowVaccineApp2
            {...propsVaccineApp2}
            data={dataVaccineApp2}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowVaccineDose
            {...propsVaccineDose}
            data={dataVaccDose}
            variable={variable}
            themeDark={themeDark}
          />
          <InfoRowVaccineType
            {...propsVaccineType}
            data={data.vaccine_type}
            variable={variable}
            themeDark={themeDark}
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Section;
