import styled from "styled-components";

export const InfoContainer = styled.div`
  stroke: ${({ themeDark }) => (themeDark ? "white" : "black")};
  stroke-width: 0.5px;
  color: ${({ themeDark }) => (themeDark ? "white" : "black")};
  background: ${({ themeDark }) => (themeDark ? "#1E1C1C" : "whitesmoke")};

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
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  width: 800px;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    width: 350px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 30px 15px 0 0;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    padding: 20px 15px 0 45px;
  }

`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    margin-top: -35px;
    padding: 0 15px 15px 15px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: lightseagreen;
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
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ themeDark }) => (themeDark ? "white" : "black")};

  @media screen and (max-width: 768px) {
    font-size: 16px;
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
`;
