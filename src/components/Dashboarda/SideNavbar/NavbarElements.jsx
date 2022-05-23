import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.div`
    background-color: '#fafafb';
    min-width:300px;
    height:100vh;
    position: fixed;
    left: 0;
    top: 0;
    font-size: 1rem;
    box-shadow: rgba(149, 157, 165, .2) 0px 8px 24px;
`

export const NavbarContainer = styled.div`
    justify-content: space-between;
    padding: 0 30px;
`

export const NavLogo = styled(LinkR)`
    /* color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none; */
`

export const NavMenu = styled.ul`
    display: flex-start;
    list-style: none;
    text-align: left;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 60px;
`

export const NavLinkS = styled(LinkS)`
    color: #010101;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavLinkR = styled(LinkR)`
    color: #010101;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavBtn = styled.nav`
    /* display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    } */
`

export const NavBtnLink = styled(LinkR)`
    /* border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    } */
`