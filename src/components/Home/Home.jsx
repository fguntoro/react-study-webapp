import React, {useState} from 'react'
import { Navbar, Sidebar, HeroSection, About, InfoSection, homeObjOne, homeObjTwo, homeObjThree, homeObjFour, Resources, Footer } from '..'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <About />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <Resources />
        <Footer />
    </>
  )
}

export default Home