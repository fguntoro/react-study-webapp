import React, { useState } from "react";
import {
  AboutBg,
  VideoBg,
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutWrapper,
  AboutCard,
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
import Video from "../../../assets/videos/virus_white.mp4";
// TODO Edit video to reverse loop so no breaks
import { CircularButton } from "../../ButtonElements";
import { Link as LinkS } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
};

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutBg>
        <VideoBg autoPlay={false} loop muted src={Video} type="video/mp4" />
      </AboutBg>
      <AboutContent>
        <AboutH1>4 Research Programmes</AboutH1>
        <div style={{ display: "block", width: 900, height: 500, padding: 30 }}>
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
        </div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
