import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Projects from './pages/projects/projects';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className={`page`}>
          <Header />
          <Projects />
          <Footer />
        </div>
      </HashRouter>
  );}
}

// -------------------- Export ----------------

export default App;
