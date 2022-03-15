import React from 'react'
import { ResourcesContainer, ResourcesH1, ResourcesWrapper, ResourcesCard, ResourcesH2, ResourcesP, IconClipboardData, IconTable, IconNewspaperOutline} from './ResourcesElements'

const Resources = () => {
  return (
    <ResourcesContainer id="resources">
      <ResourcesH1>Resources</ResourcesH1>
        <ResourcesWrapper>
            <ResourcesCard>
                  <ResourcesH2><IconClipboardData/>Study materials</ResourcesH2>
                <ResourcesP>Access various study materials from REACT-1 and REACT-2</ResourcesP>
            </ResourcesCard>
            <ResourcesCard>
                <ResourcesH2><IconNewspaperOutline/>Reports</ResourcesH2>
                <ResourcesP>Access all our reports and preprints from the REACT studies</ResourcesP>
            </ResourcesCard>
            <ResourcesCard>
                <ResourcesH2><IconTable/>Supplementary materials</ResourcesH2>
                <ResourcesP>Access figures and tables</ResourcesP>
            </ResourcesCard>
        </ResourcesWrapper>
    </ResourcesContainer>
  )
}

export default Resources