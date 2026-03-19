import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import EscapingButton from './components/EscapingButton';
import { useScrollReveal } from './hooks/useAnimations';
import './styles/animations.css';

function App() {
  // Activate scroll reveal for all .reveal elements across the site
  useScrollReveal();

  return (
    <div className="app">
      <Navbar />
      <Hero />

      {/* ── Easter Egg Section ── */}
      <section
        style={{
          textAlign: 'center',
          padding: '4rem 1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
        className="reveal"
      >
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0.4,
          }}
        >
          psst... curious?
        </p>
        <EscapingButton />
      </section>

      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />

      <footer className="footer reveal">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Muhammed Raihan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;