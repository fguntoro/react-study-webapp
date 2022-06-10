import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import FormControlLabel from "@mui/material/FormControlLabel";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1002;
  width: 100vw;
  height: 150px;
  background: #0d0d0d;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  padding: 0 24px;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const SidebarWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 150px;
  background: #0d0d0d;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  color: #fff;
  background-color: red;

  @media screen and (max-width: 480px) {
    padding: 0 0;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  z-index: 2;
  top: 0.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const SidebarRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  padding: 0 15px;
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col2;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: repeat(1, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(1, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  justify-content: center;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 55px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    background: #fff;
    transition: 0.2s ease-in-out;
  }
`;
