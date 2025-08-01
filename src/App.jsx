import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Design from './pages/Design.jsx'
import Blogs from './pages/Blogs.jsx'
import { Contact } from 'lucide-react'
import Contacts from './pages/Contacts.jsx'
import Project from './pages/Project.jsx'
import BlogDetail from './pages/BlogDetails.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import OceiaSection from './components/ProjectDetailComponents/OceiaSection.jsx'
import InnaraSection from './components/ProjectDetailComponents/InnaraSection.jsx'

function App() {


  return (
    <div className=' '>
    {/* <Home/> */}
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/design' element={<Design/>} />
        <Route path ='/blogs' element={<Blogs/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/projects' element={<Project/>} />
       <Route path="/:projectSlug" element={<ProjectDetail />} />
        <Route path='/blogdetails' element ={<BlogDetail/>}/> 
         {/* <Route path="/blogdetails/:id" element={<Blogs />} /> */}
        <Route path="/innara" element={<InnaraSection />} />

        <Route path="/la-oceia" element={<OceiaSection />} />
      </Routes> 
      <Footer/>
    </Router>
          
          
         
    </div>
  ) 
}

export default App
