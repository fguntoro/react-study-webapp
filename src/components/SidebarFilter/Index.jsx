import React from "react";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Tooltip from "@mui/material/Tooltip";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRow,
  SidebarRow2,
  Column1,
  Column2,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Elements";

const SidebarFilter = ({
  isOpen,
  toggle,
  setRoundSelected,
  setVariableSelected,
}) => {
  const onFilterChange = (value, newValue) => {
    setRoundSelected(newValue);
  };

  const onRadioChange = (value, newValue) => {
    setVariableSelected(newValue);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
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
              onChange={onFilterChange}
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
          <Column2>
            <Icon onClick={toggle}>
              <CloseIcon />
            </Icon>
          </Column2>
        </SidebarRow>
        <SidebarRow2>
          <div>
            Variable
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="uwt_prev"
              onChange={onRadioChange}
            >
              <Tooltip title="Unweighted prevalence">
                <FormControlLabel
                  value="uwt_prev"
                  control={
                    <Radio
                      sx={{
                        color: "lightseagreen",
                        "&.Mui-checked": {
                          color: "lightseagreen",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18,
                          [`@media (max-width: 768px)`]: {
                            fontSize: 15,
                          },
                        },
                      }}
                    />
                  }
                  label="Prevalence"
                  sx={{
                    ".MuiFormControlLabel-label	": {
                      fontSize: 15,
                      [`@media (max-width: 768px)`]: {
                        fontSize: 12,
                      },
                    },
                  }}
                />
              </Tooltip>
              <Tooltip title="Number of positive tests">
                <FormControlLabel
                  value="positive"
                  control={
                    <Radio
                      sx={{
                        color: "lightseagreen",
                        "&.Mui-checked": {
                          color: "lightseagreen",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18,
                          [`@media (max-width: 768px)`]: {
                            fontSize: 15,
                          },
                        },
                      }}
                    />
                  }
                  label="Positive"
                  sx={{
                    ".MuiFormControlLabel-label	": {
                      fontSize: 15,
                      [`@media (max-width: 768px)`]: {
                        fontSize: 12,
                      },
                    },
                  }}
                />
              </Tooltip>
              <Tooltip title="Number of total swabs">
                <FormControlLabel
                  className="FilterControl"
                  value="total"
                  control={
                    <Radio
                      sx={{
                        color: "lightseagreen",
                        "&.Mui-checked": {
                          color: "lightseagreen",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18,
                          [`@media (max-width: 768px)`]: {
                            fontSize: 15,
                          },
                        },
                      }}
                    />
                  }
                  label="Total"
                  sx={{
                    ".MuiFormControlLabel-label	": {
                      fontSize: 15,
                      [`@media (max-width: 768px)`]: {
                        fontSize: 12,
                      },
                    },
                  }}
                />
              </Tooltip>
            </RadioGroup>
          </div>
        </SidebarRow2>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarFilter;
