import React from 'react'
import HomeHero from '../components/HomeComponents/HomeHero'
import FeaturedProjects from '../components/HomeComponents/FeaturedProjects'
import AboutSection from '../components/HomeComponents/AboutSection'
import VisionSection from '../components/HomeComponents/VisionSection'
import CraftedSection from '../components/HomeComponents/CraftedSection'
import Footer from '../components/Footer'
import JournalSection from '../components/HomeComponents/JournalSection'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
     <>
     <Navbar/>
     <HomeHero/>
     <AboutSection/>
     
     <FeaturedProjects/>
     <VisionSection/>
     <CraftedSection/>
     <JournalSection/>
     </>
  )
} 

export default Home