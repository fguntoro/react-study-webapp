import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import Video from "../../../assets/videos/video.mp4";
import { Button } from "../../ButtonElements";

// TODO Add join mailing list form and button

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Real-time Assessment of Community Transmission</HeroH1>
        <HeroP>
          Find out more about how our studies are supporting COVID-19
          surveillance in England
        </HeroP>
        <HeroBtnWrapper>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Button
              to="about"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth="true"
              duration={500}
              exact="true"
              offset={-60}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </BrowserRouter>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
