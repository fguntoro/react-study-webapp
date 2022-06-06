import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
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

  console.log(filteredData);

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
      <RoundSummary />
      <PersonalStats data={filteredData} variable={variableSelected} />
      <WorkStatus data={filteredData} variable={variableSelected} />
      <Covid data={filteredData} variable={variableSelected} />
      <LongCovid data={filteredData} variable={variableSelected} />
      <PrecautionaryMeasures data={filteredData} variable={variableSelected} />
      <Vaccination data={filteredData} variable={variableSelected} />
      {/* <TravelHistory /> */}
      <Resources />
      {/* <Explore /> */}
      <Footer />
    </>
  );
};

export default HomePage;
