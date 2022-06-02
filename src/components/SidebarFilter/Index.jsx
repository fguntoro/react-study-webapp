import React from "react";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
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
                      },
                    }}
                  />
                }
                label="Prevalence (Unweighted)"
                sx={{
                  ".MuiFormControlLabel-label	": {
                    fontSize: 15,
                  },
                }}
              />
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
                      },
                    }}
                  />
                }
                label="Positive"
                sx={{
                  ".MuiFormControlLabel-label	": {
                    fontSize: 15,
                  },
                }}
              />
              <FormControlLabel
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
                      },
                    }}
                  />
                }
                label="Total"
                sx={{
                  ".MuiFormControlLabel-label	": {
                    fontSize: 15,
                  },
                }}
              />
            </RadioGroup>
          </div>
        </SidebarRow2>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarFilter;
