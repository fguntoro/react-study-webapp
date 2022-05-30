import React, { useState } from "react";
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
  const [roundSelected, setRoundSelected] = useState(false);
  const [roundSelectedRight, setRoundSelectedRight] = useState(null);

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

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SidebarFilter isOpen={isOpenFilter} toggle={toggleFilter} />
      <Navbar toggle={toggle} toggleFilter={toggleFilter} />
      <HeroSection />
      <About />
      <Prevalence />
      <RoundSummary />
      <PersonalStats data={data} />
      <WorkStatus data={data} />
      <Covid data={data} />
      {/* <PrecautionaryMeasures />
      <Vaccination />
      <TravelHistory /> */}
      <Resources />
      {/* <Explore /> */}
      <Footer />
    </>
  );
};

export default HomePage;
