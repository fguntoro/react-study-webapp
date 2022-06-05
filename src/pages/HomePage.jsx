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
  PrecautionaryMeasures,
  Vaccination,
  TravelHistory,
  Resources,
  Explore,
  Footer,
  useData,
} from "../components";

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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };



  const filteredData = data[`round${roundSelected}`];
  console.log(filteredData);
  // console.log(variableSelected);

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
      {/* <Covid data={data} /> */}
      {/* <PrecautionaryMeasures data={filteredData} variable={variableSelected} /> */}
      {/* <Vaccination data={filteredData} variable={variableSelected} /> */}
      {/* <TravelHistory /> */}
      <Resources />
      {/* <Explore /> */}
      <Footer />
    </>
  );
};

export default HomePage;
