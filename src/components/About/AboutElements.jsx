import styled from "styled-components";
import { GiAntibody, GiNoseFront} from 'react-icons/gi'
import { FaViruses, FaHeadSideVirus} from 'react-icons/fa'

export const AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutContainer = styled.div`
    background: #f9f9f9;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const AboutWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const AboutCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 280px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale()(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    color: #01bf71;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const AboutH2 = styled.h2`
    margin-top: 20px;
    font-size: 1rem;
    margin-bottom: 10px;
`

export const AboutP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const Antibody = styled(GiAntibody)`
    font-size: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const Nose = styled(GiNoseFront)`
    font-size: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const Virus = styled(FaViruses)`
    font-size: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const HeadVirus = styled(FaHeadSideVirus)`
    font-size: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
`