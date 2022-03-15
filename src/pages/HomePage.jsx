import React, {useState} from 'react'
import { Navbar, Sidebar, HeroSection, About, InfoSection, homeObjOne, homeObjTwo, homeObjThree, homeObjFour, Resources, Explore, Footer } from '../components'

const HomePage = () => {
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
        <Explore />
        <Footer />
    </>
  )
}

export default HomePage