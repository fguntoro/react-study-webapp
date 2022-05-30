import React from 'react'
import Slider from "@mui/material/Slider";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRow, 
  Column1,
  Column2,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Elements";

const SidebarFilter = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarRow>
          <Column1>
          Select Round:
            <Slider
              aria-label="React-round"
              defaultValue={19}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              // value={selectedRound}
              min={1}
              max={19}
              // onChange={handleChange}
            />
          </Column1>
          {/* <Column2>
            <Slider
              aria-label="React-round"
              defaultValue={19}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              // value={selectedRound}
              min={1}
              max={19}
              // onChange={handleChange}
            />
          </Column2> */}
        </SidebarRow>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SidebarFilter;