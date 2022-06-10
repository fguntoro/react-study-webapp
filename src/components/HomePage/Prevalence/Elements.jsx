import styled from "styled-components";

export const InfoContainer = styled.div`
  /* color: #fff; */
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  padding: 50px 0;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1180px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 12px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'box2 box1''box2 box3'` : `'box1 box2''box3 box2'`};

  @media screen and (max-width: 820px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'box1' 'box2' 'box3'`
        : `'box1 box1' 'box2 box2' 'box3 box3'`};
  }
`;

export const Box1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: box1;

  @media screen and (max-width: 820px) {
    height: 150px;
  }
`;

export const Box2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: box2;
`;

export const Box3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: box3;
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
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#f7f8fa")};
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
