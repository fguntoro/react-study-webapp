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

const About = ({themeDark}) => {
  return (
    <AboutContainer id="about" themeDark={themeDark}>
      <AboutContent>
        <AboutH1>4 Research Programmes</AboutH1>
        <AboutPaper elevation={5}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjOne} themeDark={themeDark} />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjTwo} themeDark={themeDark} />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjThree} themeDark={themeDark} />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <InfoSection {...homeObjFour} themeDark={themeDark} />
            </Carousel.Item>
          </Carousel>
        </AboutPaper>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
