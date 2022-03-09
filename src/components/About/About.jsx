import React from 'react'
import { AboutBg, VideoBg, AboutContainer, AboutContent, AboutH1, AboutWrapper, AboutCard, AboutH2, AboutP, Antibody, Nose, Virus, HeadVirus} from './AboutElements'
import Video from '../../videos/virus_white.mp4'
import { CircularButton } from '../ButtonElements'

const About = () => {
  return (
    <AboutContainer id="about">
        <AboutBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </AboutBg>
        <AboutContent>
            <AboutH1>4 Research Programmes</AboutH1>
        <AboutWrapper>
            <AboutCard>
                <CircularButton primary='true' dark='true'><Nose/></CircularButton>
                <AboutH2>REACT-1</AboutH2>
                <AboutP>Prevalence study: Nose/throat swabs</AboutP>
            </AboutCard>
            <AboutCard>
                <CircularButton primary='true' dark='true'><Antibody/></CircularButton>
                <AboutH2>REACT-2</AboutH2>
                <AboutP>Prevalence study: Antibody tests</AboutP>
            </AboutCard>
            <AboutCard>
                <CircularButton primary='true' dark='true'><Virus/></CircularButton>
                <AboutH2>REACT-GE</AboutH2>
                <AboutP>Genetic and other biological signatures influencing COVID-19 severity</AboutP>
            </AboutCard>
            <AboutCard>
                <CircularButton primary='true' dark='true'><HeadVirus/></CircularButton>
                <AboutH2>REACT-LC</AboutH2>
                <AboutP>Biological, environmental and social factors underlying Long COVID</AboutP>
            </AboutCard>
        </AboutWrapper>
        </AboutContent>
    </AboutContainer>
  )
}

export default About