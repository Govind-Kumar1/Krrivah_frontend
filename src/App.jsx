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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      </Routes>
      <Footer/>
    </Router>
          
          
         
    </>
  ) 
}

export default App
