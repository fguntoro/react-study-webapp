import React, {useState} from 'react'
import { Navbar, Sidebar, HeroSection, About, Prevalence, Resources, Explore, Footer } from '../components'

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
      <Prevalence />
      <Resources />
      <Explore />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage