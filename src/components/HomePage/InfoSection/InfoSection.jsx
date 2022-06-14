import React from "react";
import { Button } from "../../ButtonElements";
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
} from "./InfoSectionElements";
import { openInNewTab } from "../../utils/links";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  themeDark,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  linkTo,
}) => {
  return (
    <>
      <InfoContainer themeDark={themeDark} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading themeDark={themeDark}>{headLine}</Heading>
                <Subtitle themeDark={themeDark}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="/"
                    onClick={() => openInNewTab(linkTo)}
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={-60}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
