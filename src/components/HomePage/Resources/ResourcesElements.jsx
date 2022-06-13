import styled from "styled-components";
import { BsClipboardData, BsTable } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import Paper from "@mui/material/Paper";

export const ResourcesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ themeDark }) => (themeDark ? "#1E1C1C" : "whitesmoke")};

  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const ResourcesWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 4rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 45px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ResourcesCard = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  height: 200px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    height: 160px;
  }
`;

export const ResourcesH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: lightseagreen;
  margin-bottom: 0;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

`;

export const ResourcesH2 = styled.h2`
  font-size: 1.5rem;
  color: lightseagreen;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ResourcesP = styled.p`
  color: ${({ themeDark }) => (themeDark ? "white" : "black")};
  font-size: 1rem;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const IconClipboardData = styled(BsClipboardData)`
  font-size: 20px;
  margin-right: 10px;
`;

export const IconNewspaperOutline = styled(IoNewspaperOutline)`
  font-size: 22px;
  margin-right: 10px;
`;

export const IconTable = styled(BsTable)`
  font-size: 18px;
  margin-right: 10px;
`;
