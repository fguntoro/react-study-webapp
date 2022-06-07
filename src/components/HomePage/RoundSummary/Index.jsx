import React, { useState } from "react";
import {
  AboutBg,
  VideoBg,
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutWrapper,
  AboutPaper,
  AboutH2,
  AboutP,
  Antibody,
  Nose,
  Virus,
  HeadVirus,
} from "./Elements";
import {
  InfoSection,
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../index";
import { useData } from "./useData";

import Paper from "@mui/material/Paper";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { grey } from "@mui/material/colors";

const Section = (roundSelected) => {
  const data = useData();

  if (!data) {
    return <pre> Loading... </pre>;
  }

  const filteredData = data.filter(
    (d) => d.Round == Object.values(roundSelected)
  );
  console.log(data);

  console.log(filteredData[0].Round);

  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutH1>Round Summary</AboutH1>
        <AboutPaper elevation={5}>
          Round Selected = {filteredData[0].Round}
        </AboutPaper>
      </AboutContent>
    </AboutContainer>
  );
};

export default Section;
