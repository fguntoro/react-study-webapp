import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>REACT</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='resources'>Resources</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='explore'>Explore</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar