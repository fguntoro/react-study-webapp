import React from 'react'
import { AboutBg, VideoBg, AboutContainer, AboutContent, AboutH1, AboutWrapper, AboutCard, AboutH2, AboutP, Antibody, Nose, Virus, HeadVirus} from './AboutElements'
import Video from '../../../videos/virus_white.mp4'
// TODO Edit video to reverse loop so no breaks
import { CircularButton } from '../../ButtonElements'
import { Link as LinkS } from 'react-scroll'


const About = () => {
  return (
    <AboutContainer id="about">
        <AboutBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </AboutBg>
        <AboutContent>
            <AboutH1>4 Research Programmes</AboutH1>
        <AboutWrapper>
            <LinkS to='react1' smooth={true} duration={500}  spy={true} exact='true' offset={-60}>
                <AboutCard>
                    <CircularButton to='react1' primary='true' dark='true' smooth={true} duration={500}  spy={true} exact='true' offset={-60}><Nose/></CircularButton>
                    <AboutH2>REACT-1</AboutH2>
                    <AboutP>Prevalence study: Nose/throat swabs</AboutP>
                </AboutCard>
            </LinkS>

            <LinkS to='react2' smooth={true} duration={500}  spy={true} exact='true' offset={-60}>
                <AboutCard>
                    <CircularButton to='react2' primary='true' dark='true' smooth={true} duration={500}  spy={true} exact='true' offset={-60}><Antibody/></CircularButton>
                    <AboutH2>REACT-2</AboutH2>
                    <AboutP>Prevalence study: Antibody tests</AboutP>
                </AboutCard>
            </LinkS>

            <LinkS to='reactge' smooth={true} duration={500}  spy={true} exact='true' offset={-60}>
                <AboutCard>
                    <CircularButton to='reactge' primary='true' dark='true' smooth={true} duration={500}  spy={true} exact='true' offset={-60}><Virus/></CircularButton>
                    <AboutH2>REACT-GE</AboutH2>
                    <AboutP>Genetic and other biological signatures influencing COVID-19 severity</AboutP>
                </AboutCard>
            </LinkS>

            <LinkS to='reactlc' smooth={true} duration={500}  spy={true} exact='true' offset={-60}>
                <AboutCard>
                    <CircularButton to='reactlc' primary='true' dark='true' smooth={true} duration={500}  spy={true} exact='true' offset={-60}><HeadVirus/></CircularButton>
                    <AboutH2>REACT-LC</AboutH2>
                    <AboutP>Biological, environmental and social factors underlying Long COVID</AboutP>
                </AboutCard>
            </LinkS>
        </AboutWrapper>
        </AboutContent>
    </AboutContainer>
  )
}

export default About