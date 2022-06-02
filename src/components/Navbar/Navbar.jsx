import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars, FaFilter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkS,
  NavLinkR,
  NavBtn,
  NavBtnLink,
  FilterIcon,
} from "./NavbarElements";

const Navbar = ({ toggle, toggleFilter }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return function cleanup() {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              REACT
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinkS
                  to="about"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-65}
                  spy={true}
                >
                  About
                </NavLinkS>
              </NavItem>
              <NavItem>
                <NavLinkS
                  to="prevalence"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  Map
                </NavLinkS>
              </NavItem>
              <NavItem>
                <NavLinkS
                  to="roundSummary"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  Summary
                </NavLinkS>
              </NavItem>

              <NavItem>
                <NavLinkS
                  to="personalStats"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  Characteristics
                </NavLinkS>
              </NavItem>

              <NavItem>
                <NavLinkS
                  to="workStatus"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  Life
                </NavLinkS>
              </NavItem>

              <NavItem>
                <NavLinkS
                  to="covid"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  COVID
                </NavLinkS>
              </NavItem>

              <NavItem>
                <NavLinkS
                  to="resources"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  Resources
                </NavLinkS>
              </NavItem>

              {/* <NavItem>
                <NavLinkS
                  to="explore"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  Explore
                </NavLinkS>
              </NavItem> */}
              {/* <NavItem>
                            <NavLinkR to='/dashboard' smooth="true" duration={500}  exact='true' offset={-60}>Dashboard</NavLinkR>
                        </NavItem> */}
            </NavMenu>

            <FilterIcon onClick={toggleFilter}>
              <FaFilter />
            </FilterIcon>
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
