import React from 'react';
import Header from './components/Header';
import About from './components/About'; // This will be your Summary section
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience'; // This will be your Professional Experience section
import Projects from './components/Projects';
import Activities from './components/Activities'; // This will be your Engaged Activities section
import Interests from './components/Interests';

import './Portfolio.css'; // Make sure you create this CSS file

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Activities />
        <Interests />
      </main>
      {/* You can add a Footer component here if you want */}
    </div>
  );
}

export default Portfolio;
