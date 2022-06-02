import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="prevalence" onClick={toggle}>
            Map
          </SidebarLink>
          <SidebarLink to="roundSummary" onClick={toggle}>
            Summary
          </SidebarLink>
          <SidebarLink to="personalStats" onClick={toggle}>
            Characteristics
          </SidebarLink>

          <SidebarLink to="workStatus" onClick={toggle}>
            Life
          </SidebarLink>
          <SidebarLink to="covid" onClick={toggle}>
            COVID
          </SidebarLink>
          <SidebarLink to="resources" onClick={toggle}>
            Resources
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar