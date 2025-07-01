import React from 'react'
import ContactSection from '../components/ContactComponents/ContactSection'
import NavbarLight from '../components/NavbarLight'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactComponents/ContactHero'

const Contact = () => {
  return (
    <>
    <NavbarLight/>
    <ContactHero/>
    <ContactSection/>
    {/* <Footer/> */}
    </>
  )
}

export default Contact