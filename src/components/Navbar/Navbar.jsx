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
  IconContainer,
} from "./NavbarElements";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

const MaterialUISwitch = styled(Switch)(({ }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#8796A5",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#003892",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#8796A5",
    borderRadius: 20 / 2,
  },
}));

const Navbar = ({ toggle, toggleFilter, toggleThemeDark, themeDark }) => {
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
                  to="panel-personal-header"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-60}
                  spy={true}
                >
                  Explore
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
            <IconContainer>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <FaFilter
                onClick={toggleFilter}
                style={{ margin: "0 10px 0 15px" }}
              />
              <FormGroup style={{ margin: "0 0" }}>
                <FormControlLabel
                  control={
                    <MaterialUISwitch
                      onChange={toggleThemeDark}
                      sx={{ m: 1 }}
                    />
                  }
                />
              </FormGroup>
            </IconContainer>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
