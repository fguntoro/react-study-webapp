import React, {useState} from 'react'
import { Navbar, Sidebar, Footer } from '../components'
import SideNavbar from '../components/Dashboarda/SideNavbar/SideNavbar'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Navbar toggle={toggle}/>
        <SideNavbar toggle={toggle}/>
        <Footer/>
    </>
  )
}

export default Dashboard