import React from 'react'
import { ResourcesContainer, ResourcesH1, ResourcesWrapper, ResourcesCard, ResourcesIcon, ResourcesH2, ResourcesP } from './ResourcesElements'
import Icon1 from '../../images/react1.svg'
import Icon2 from '../../images/react2.svg'

const Resources = () => {
  return (
    <ResourcesContainer id="resources">
        <ResourcesH1>Resources</ResourcesH1>
        <ResourcesWrapper>
            <ResourcesCard>
                <ResourcesIcon src={Icon1}/>
                <ResourcesH2>Reduce expenses</ResourcesH2>
                <ResourcesP>We help you</ResourcesP>
            </ResourcesCard>
            <ResourcesCard>
                <ResourcesIcon src={Icon2}/>
                <ResourcesH2>Virtual offices</ResourcesH2>
                <ResourcesP>You can access</ResourcesP>
            </ResourcesCard>
            
        </ResourcesWrapper>
    </ResourcesContainer>
  )
}

export default Resources