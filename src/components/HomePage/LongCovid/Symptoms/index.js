import React from "react";
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
import Chart from "../../ScatterPlot/BuildChart";
import { axisLabelDict } from "./labels";

const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headLine,
  description,
  buttonLabel,
  primary,
  dark,
  dark2,
  linkTo,
  data,
  variable,
  xAxisLabel,
}) => {
  return (
    <>
      <InfoRow imgStart={imgStart}>
        <Column1>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
          </TextWrapper>
        </Column1>
        <Column2>
          <Chart
            data={data}
            width={500}
            height={600}
            variable={variable}
            xAxisLabel={xAxisLabel}
            axisLabelDict={axisLabelDict}
          />
        </Column2>
      </InfoRow>
    </>
  );
};

export default Info;
