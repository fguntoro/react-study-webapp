import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkTitle, FooterLinkItems, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/">REACT Study</FooterLink>
                        <FooterLink to="/">Public Advisory Group</FooterLink>
                        <FooterLink to="/">FAQs</FooterLink>
                        <FooterLink to="/">Glossary</FooterLink>
                        <FooterLink to="/">News</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Resources</FooterLinkTitle>
                        <FooterLink to="/">Study Materials</FooterLink>
                        <FooterLink to="/">Reports</FooterLink>
                        <FooterLink to="/">Preprints</FooterLink>
                        <FooterLink to="/">Supplementary Files</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Explore</FooterLinkTitle>
                        <FooterLink to="/">Rounds</FooterLink>
                        <FooterLink to="/">Prevalence</FooterLink>
                        <FooterLink to="/">Vaccine Impact</FooterLink>
                        <FooterLink to="/">Lockdown Impact</FooterLink>
                        <FooterLink to="/">Key Estimates</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer