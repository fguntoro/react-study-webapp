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
          <SidebarLink to="panel-personal-header" onClick={toggle}>
            Explore
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