import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinkS, NavLinkR, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {

  return (
    <>
    <h1></h1>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinkS to='about' smooth="true" duration={500} exact='true' offset={-60}>About</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to='resources' smooth="true" duration={500}  exact='true' offset={-60}>Resources</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to='explore' smooth="true" duration={500}  exact='true' offset={-60}>Explore</NavLinkS>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinkR to='/dashboard' smooth="true" duration={500}  exact='true' offset={-60}>Dashboard</NavLinkR>
                        </NavItem> */}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
    </>
  )
}

export default Navbar