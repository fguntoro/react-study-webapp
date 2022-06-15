import React from "react";
import {
  ResourcesContainer,
  ResourcesH1,
  ResourcesWrapper,
  ResourcesCard,
  ResourcesH2,
  ResourcesP,
  IconClipboardData,
  IconTable,
  IconNewspaperOutline,
} from "./ResourcesElements";

import { openInNewTab } from "../../utils/links";

const Resources = ({ themeDark }) => {
  return (
    <ResourcesContainer id="resources" themeDark={themeDark}>
      <ResourcesH1>Resources</ResourcesH1>
      <ResourcesWrapper>
        <ResourcesCard
          elevation={5}
          sx={{ backgroundColor: themeDark ? "#010606" : "white" }}
          onClick={() =>
            openInNewTab(
              "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/for-researchers/"
            )
          }
        >
          <ResourcesH2>
            <IconClipboardData />
            Study materials
          </ResourcesH2>
          <ResourcesP themeDark={themeDark}>
            Access various study materials from REACT-1 and REACT-2
          </ResourcesP>
        </ResourcesCard>

        <ResourcesCard
          elevation={5}
          sx={{ backgroundColor: themeDark ? "#010606" : "white" }}
          onClick={() =>
            openInNewTab(
              "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/real-time-assessment-of-community-transmission-findings/"
            )
          }
        >
          <ResourcesH2>
            <IconNewspaperOutline />
            Reports
          </ResourcesH2>
          <ResourcesP themeDark={themeDark}>
            Access all our reports and publications from the REACT studies
          </ResourcesP>
        </ResourcesCard>

        <ResourcesCard
          elevation={5}
          sx={{ backgroundColor: themeDark ? "#010606" : "white" }}
          onClick={() =>
            openInNewTab(
              "https://www.voice-global.org/public/groups/react-covid-19-community-network/"
            )
          }
        >
          <ResourcesH2>
            <IconTable />
            Community Network
          </ResourcesH2>
          <ResourcesP themeDark={themeDark}>
            Join the COVID-19 community network to hear about our latest
            findings and getting involved.
          </ResourcesP>
        </ResourcesCard>
      </ResourcesWrapper>
    </ResourcesContainer>
  );
};

export default Resources;
