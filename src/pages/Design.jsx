import React from 'react'
import HeroDesign from '../components/DesignComponents/HeroDesign'
import DesignSection from '../components/DesignComponents/DesignSection'
import GallerySection from '../components/DesignComponents/GallerySection'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'

const Design = () => {
  return (
     <>
     <Navbar/>
     <HeroDesign/>
     <DesignSection/>
     <GallerySection/>
     </>
  )
}

export default Design