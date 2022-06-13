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
} from "../../Elements";
import Chart from "../../ScatterPlot/BuildChart";
import { axisLabelDict } from "./labels";

const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  themeDark,
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
            <Heading themeDark={themeDark}>{headLine}</Heading>
            <Subtitle themeDark={themeDark}>{description}</Subtitle>
          </TextWrapper>
        </Column1>
        <Column2>
          <Chart
            data={data}
            width={500}
            height={600}
            variable={variable}
            themeDark={themeDark}
            xAxisLabel={xAxisLabel}
            axisLabelDict={axisLabelDict}
          />
        </Column2>
      </InfoRow>
    </>
  );
};

export default Info;
