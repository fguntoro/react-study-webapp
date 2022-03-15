import React from 'react'
import { ExploreContainer, ExploreH1, ExploreWrapper, ExploreCard, ExploreH2, ExploreP, IconClipboardData, IconTable, IconNewspaperOutline} from './ExploreElements'

const Explore = () => {
  return (
    <ExploreContainer id="explore">
      <ExploreH1>Explore</ExploreH1>
        <ExploreWrapper>
            <h1>This is where we highlight recent findings</h1>
            <ExploreCard>
                <ExploreP>Here we show different figures with auto slider</ExploreP>
            </ExploreCard>
            <ExploreCard>
                <ExploreP>Also show button to bring to interactive dashboard</ExploreP>
            </ExploreCard>
        </ExploreWrapper>
    </ExploreContainer>
  )
}

export default Explore