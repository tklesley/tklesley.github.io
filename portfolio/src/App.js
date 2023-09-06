import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Landing from './pages/landing/landing';
import Projects from './pages/projects/projects';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

class App extends React.Component {
  
  lightmode = "{--lightmodetext: #000000; --darkmodetext: #FFFFFF; --lightblue: #09a7e5; --darkblue:#0d19c0; --lightgreen: #3cff00; --darkgreen: #035a00; --lightpurple: #a200e2; --darkpurple: #390047; --dark-bg:#221f1f; --light-bg:#f7f3f3;}";

  render() {
    return (
      <BrowserRouter>
        <div className='page'>
          <Header />
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
    )}
  }

// -------------------- Export ----------------

export default App;
