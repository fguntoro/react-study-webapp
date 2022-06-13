import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Navbar,
  Sidebar,
  SidebarFilter,
  HeroSection,
  About,
  Prevalence,
  RoundSummary,
  PersonalStats,
  WorkStatus,
  Covid,
  LongCovid,
  PrecautionaryMeasures,
  Vaccination,
  TravelHistory,
  Resources,
  Explore,
  Footer,
  useData,
} from "../components";
import { StyledTypography, styledAccordion } from "./HomePageElements";
import { recodeNA } from "../components/utils/dataManipulation";
import { ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [roundSelected, setRoundSelected] = useState(19);
  const [roundSelectedRight, setRoundSelectedRight] = useState(null);
  const [variableSelected, setVariableSelected] = useState("uwt_prev");
  const [themeDark, setThemeDark] = useState(false);

  const data = useData();
  if (!data) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const filteredData = data[`round${roundSelected}`];

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const toggleThemeDark = () => {
    setThemeDark(!themeDark);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SidebarFilter
        isOpen={isOpenFilter}
        toggle={toggleFilter}
        setRoundSelected={setRoundSelected}
        setVariableSelected={setVariableSelected}
      />
      <Navbar
        toggle={toggle}
        toggleFilter={toggleFilter}
        toggleThemeDark={toggleThemeDark}
        themeDark={themeDark}
      />
      <HeroSection />
      <About themeDark={themeDark} />
      <Prevalence themeDark={themeDark} />
      <RoundSummary roundSelected={roundSelected} themeDark={themeDark} />

      {/* <ThemeProvider theme={theme}> */}
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ backgroundColor: themeDark ? "#101010" : "white" }}
        disableGutters
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: themeDark ? "white" : "darkgrey" }} />
          }
          aria-controls="panel-personal-content"
          id="panel-personal-header"
        >
          <StyledTypography className="panel-label">
            Personal Statistics
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <PersonalStats
            data={filteredData}
            variable={variableSelected}
            themeDark={themeDark}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ backgroundColor: themeDark ? "#101010" : "white" }}
        disableGutters
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: themeDark ? "white" : "darkgrey" }} />
          }
          aria-controls="panel-work-content"
          id="panel-work-header"
        >
          <StyledTypography className="panel-label">
            Work Status
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <WorkStatus
            data={filteredData}
            variable={variableSelected}
            themeDark={themeDark}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ backgroundColor: themeDark ? "#101010" : "white" }}
        disableGutters
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: themeDark ? "white" : "darkgrey" }} />
          }
          aria-controls="panel-covid-content"
          id="panel-covid-header"
        >
          <StyledTypography className="panel-label">COVID</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Covid
            data={filteredData}
            variable={variableSelected}
            themeDark={themeDark}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ backgroundColor: themeDark ? "#101010" : "white" }}
        disableGutters
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: themeDark ? "white" : "darkgrey" }} />
          }
          aria-controls="panel-longcovid-content"
          id="panel-longcovid-header"
        >
          <StyledTypography className="panel-label">
            Long COVID
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <LongCovid
            data={filteredData}
            variable={variableSelected}
            themeDark={themeDark}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ backgroundColor: themeDark ? "#101010" : "white" }}
        disableGutters
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: themeDark ? "white" : "darkgrey" }} />
          }
          aria-controls="panel-measures-content"
          id="panel-measures-header"
        >
          <StyledTypography className="panel-label">
            Precautionary Measures
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <PrecautionaryMeasures
            data={filteredData}
            variable={variableSelected}
            themeDark={themeDark}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ backgroundColor: themeDark ? "#101010" : "white" }}
        disableGutters
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: themeDark ? "white" : "darkgrey" }} />
          }
          aria-controls="panel-vaccine-content"
          id="panel-vaccine-header"
        >
          <StyledTypography className="panel-label">
            Vaccination
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Vaccination
            data={filteredData}
            variable={variableSelected}
            themeDark={themeDark}
          />
        </AccordionDetails>
      </Accordion>
      {/* </ThemeProvider> */}

      {/* <TravelHistory /> */}
      <Resources themeDark={themeDark} />
      {/* <Explore /> */}
      <Footer />
    </>
  );
};

export default HomePage;
