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
} from "./AboutElements";
import {
  InfoSection,
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../index";

import Paper from "@mui/material/Paper";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { grey } from "@mui/material/colors";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutH1>4 Research Programmes</AboutH1>
        <AboutPaper elevation={5}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjOne} />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjTwo} />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjThree} />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjFour} />
            </Carousel.Item>
          </Carousel>
        </AboutPaper>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
