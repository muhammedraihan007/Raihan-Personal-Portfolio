import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Muhammed Raihan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
