import styled from "styled-components";

export const InfoContainer = styled.div`
  color: ${({ themeDark }) => (themeDark ? "#white" : "#black")};
  background: ${({ themeDark }) => (themeDark ? "#010606" : "#white")};

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 25px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    height: 330px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  /* @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  } */

  @media screen and (max-width: 480px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1'` : `'col1 col1'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px 0 75px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: lightseagreen;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ themeDark }) => (themeDark ? "white" : "black")};

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  /* @media screen and (max-width: 768px) {
    width: 80%;
  } */
`;
