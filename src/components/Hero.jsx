import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Section from './Section';
import profileImg from '../images/photo_2026-02-21_17-58-12.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Muhammed Raihan</h1>
                    <h2 className="role">Software & Web Developer</h2>
                    <p className="summary">
                        Integrated MCA graduate skilled in Python, Django, React.js, and the MERN stack.
                        Passionate about building scalable backends and engaging web experiences.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href="https://www.linkedin.com/in/muhammedraihan007" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><Linkedin size={22} /></a>
                        <a href="https://github.com/muhammedraihan007" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon"><Github size={22} /></a>
                        <a href="mailto:raihanmuhammed0077@gmail.com" aria-label="Email" className="social-icon"><Mail size={22} /></a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-shape"></div>
                    {/* Display actual image from src/images */}
                    <div className="hero-avatar">
                        <img src={profileImg} alt="Muhammed Raihan" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
