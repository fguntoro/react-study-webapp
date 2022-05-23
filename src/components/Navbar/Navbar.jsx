import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
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
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
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
                  offset={-60}
                >
                  About
                </NavLinkS>
              </NavItem>
              <NavItem>
                <NavLinkS
                  to="resources"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                >
                  Resources
                </NavLinkS>
              </NavItem>
              <NavItem>
                <NavLinkS
                  to="explore"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                >
                  Explore
                </NavLinkS>
              </NavItem>
              {/* <NavItem>
                            <NavLinkR to='/dashboard' smooth="true" duration={500}  exact='true' offset={-60}>Dashboard</NavLinkR>
                        </NavItem> */}
            </NavMenu>
            <NavBtn>
              {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
