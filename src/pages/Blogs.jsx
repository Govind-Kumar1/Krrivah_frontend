import React from 'react'
import CardsBlogs from '../components/BlogComponents/CardBlogs'
import NavbarDark from '../components/NavbarDark'
import Footer from '../components/Footer'
import Hero from '../components/BlogComponents/Hero'
import Navbar from '../components/NavbarDark'
const Blog = () => {
  return (
     <>
     <Navbar/>
     {/* <div className="border-t border-black my-4"></div> */}
     <Hero/> 
     <CardsBlogs/>
     {/* <Footer/> */}
     </>
  )
}
  
export default Blog