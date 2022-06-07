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
        <AboutWrapper>
          <AboutPaper elevation={5}>
            <p>Round Selected</p>
            <h1 style={{ color: "lightseagreen" }}>{filteredData[0].Round}</h1>
          </AboutPaper>
          <AboutPaper elevation={5}>
            <p>Prevalence</p>
            <h1 style={{ color: "lightseagreen" }}>
              {filteredData[0].Prevalence}%
            </h1>
          </AboutPaper>
          <AboutPaper elevation={5}>
            <p>Start Date</p>
            <h2 style={{ color: "lightseagreen" }}>
              {filteredData[0].Start.toDateString()}
            </h2>
          </AboutPaper>
          <AboutPaper elevation={5}>
            <p>End Date</p>
            <h2 style={{ color: "lightseagreen" }}>
              {filteredData[0].End.toDateString()}
            </h2>
          </AboutPaper>
          <AboutPaper elevation={5}>
            <p>Positive Tests</p>
            <h1 style={{ color: "lightseagreen" }}>
              {filteredData[0].Positive}
            </h1>
          </AboutPaper>
          <AboutPaper elevation={5}>
            <p>Total Swabs</p>
            <h1 style={{ color: "lightseagreen" }}>{filteredData[0].Tested}</h1>
          </AboutPaper>
        </AboutWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default Section;
