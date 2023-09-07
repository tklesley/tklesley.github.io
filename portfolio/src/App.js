import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Landing from './pages/landing/landing';
import Projects from './pages/projects/projects';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

export default function App() {

// Darkmode State & Functions

  const [darkmode, setDarkmode] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem("theme-context") == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.setItem("theme-context", "dark")
            setDarkmode(true)
        } else {
            localStorage.setItem("theme-context", "light")
        }
    }
  }, [])

  const toggleDarkmode = () => {
    console.log("Changing Theme")
    if (localStorage.getItem("theme-context") === "dark") {
      localStorage.setItem("theme-context", "light");
      setDarkmode(false)
    } else {
      localStorage.setItem("theme-context", "dark");
      setDarkmode(true)
    }
  }

  return (
    <BrowserRouter>
      <div className={darkmode ? `page darkmode` : `page`}>
        <Header
          toggleDarkmode={()=>toggleDarkmode}
          darkmode={darkmode}
          />
        <div className="content-div">
        <Routes>
          <Route path='' element={<Landing />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
