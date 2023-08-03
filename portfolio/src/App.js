import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Landing from './pages/landing/landing';
import Projects from './pages/projects/projects';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='page'>
          <Header />
          <div className="content-div">
          <Routes>
            <Route path='' element={<Landing />} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )}
  }

// -------------------- Export ----------------

export default App;
