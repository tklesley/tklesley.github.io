import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Landing from './pages/landing/landing';
import Projects from './pages/projects/projects';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='' element={<Landing />} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    )}
  }

// -------------------- Export ----------------

export default App;
