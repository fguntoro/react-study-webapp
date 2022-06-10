import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
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
import { recodeNA } from "../components/utils/dataManipulation";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [roundSelected, setRoundSelected] = useState(19);
  const [roundSelectedRight, setRoundSelectedRight] = useState(null);
  const [variableSelected, setVariableSelected] = useState("uwt_prev");

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

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SidebarFilter
        isOpen={isOpenFilter}
        toggle={toggleFilter}
        setRoundSelected={setRoundSelected}
        setVariableSelected={setVariableSelected}
      />
      <Navbar toggle={toggle} toggleFilter={toggleFilter} />
      <HeroSection />
      <About />
      <Prevalence />
      <RoundSummary roundSelected={roundSelected} />

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-personal-content"
          id="panel-personal-header"
        >
          <Typography>Personal Statistics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PersonalStats data={filteredData} variable={variableSelected} />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-work-content"
          id="panel-work-header"
        >
          <Typography>Work Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <WorkStatus data={filteredData} variable={variableSelected} />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-covid-content"
          id="panel-covid-header"
        >
          <Typography>COVID</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Covid data={filteredData} variable={variableSelected} />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-longcovid-content"
          id="panel-longcovid-header"
        >
          <Typography>Long COVID</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LongCovid data={filteredData} variable={variableSelected} />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-measures-content"
          id="panel-measures-header"
        >
          <Typography>Precautionary Measures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PrecautionaryMeasures
            data={filteredData}
            variable={variableSelected}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-vaccine-content"
          id="panel-vaccine-header"
        >
          <Typography>Vaccination</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Vaccination data={filteredData} variable={variableSelected} />
        </AccordionDetails>
      </Accordion>

      {/* <TravelHistory /> */}
      <Resources />
      {/* <Explore /> */}
      <Footer />
    </>
  );
};

export default HomePage;
