import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkTitle, FooterLinkItems, FooterLink } from './FooterElements'
import { openInNewTab } from "../utils/links";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink
                to="/"
                onClick={() =>
                  openInNewTab(
                    "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/"
                  )
                }
              >
                REACT Study
              </FooterLink>
              <FooterLink
                to="/"
                onClick={() =>
                  openInNewTab(
                    "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/find-out-about-react/"
                  )
                }
              >
                Study Team
              </FooterLink>
              <FooterLink
                to="/"
                onClick={() =>
                  openInNewTab(
                    "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/react_pag/"
                  )
                }
              >
                Public Advisory Group
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink
                to="/"
                onClick={() =>
                  openInNewTab(
                    "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/for-researchers/"
                  )
                }
              >
                Study Materials
              </FooterLink>
              <FooterLink
                to="/"
                onClick={() =>
                  openInNewTab(
                    "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/real-time-assessment-of-community-transmission-findings/"
                  )
                }
              >
                Reports
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Media</FooterLinkTitle>
              <FooterLink
                to="/"
                onClick={() => openInNewTab("https://twitter.com/ReactStudy")}
              >
                Twitter
              </FooterLink>
              <FooterLink
                to="/"
                onClick={() =>
                  openInNewTab(
                    "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/news/"
                  )
                }
              >
                News
              </FooterLink>
              <FooterLink
                to="/"
                onClick={() =>
                  openInNewTab(
                    "https://www.imperial.ac.uk/medicine/research-and-impact/groups/react-study/watch-our-videos/"
                  )
                }
              >
                Videos
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <p
          style={{
            color: "white",
            fontSize: "10px",
            marginTop: "50px",
            marginBottom: "-30px",
          }}
        >
          Website development by Fernando Guntoro, Imperial College London
        </p>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer