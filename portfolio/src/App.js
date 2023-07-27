import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Projects from './pages/projects/projects';
import Landing from './pages/landing/landing';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className={`page`}>
          Placeholder Text
          <Header />
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Projects />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
  );}
}

// -------------------- Export ----------------

export default App;
