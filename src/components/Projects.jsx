import React from 'react';
import Section from './Section';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Excel Processor',
            tech: 'Python, Django, Flask',
            description: 'A platform for managing Sales & Receipt operations efficiently.',
            link: '#',
            github: 'https://github.com/muhammedraihan007'
        },
        {
            title: 'Food Delivery Application',
            tech: 'MERN Stack',
            description: 'Core backend features using Node.js and Express. Robust REST APIs and MongoDB integration for orders, menus, and users.',
            link: '#',
            github: 'https://github.com/muhammedraihan007'
        },
        {
            title: 'Second-Hand Car Selling',
            tech: 'Python, Django',
            description: 'Backend backend features for a car-selling platform. Developed REST APIs and integrated database for managing car listings and users.',
            link: '#',
            github: 'https://github.com/muhammedraihan007'
        },
        {
            title: 'AI Recipe Generator',
            tech: 'Python, FastAPI',
            description: 'An AI-powered recipe generator to generate recipes based on user-input ingredients.',
            link: '#',
            github: 'https://github.com/muhammedraihan007'
        }
    ];

    return (
        <Section id="projects" title="Featured Projects">
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-tech">{project.tech}</p>
                        <p className="project-description">{project.description}</p>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link"><Github size={18} /> Code</a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link"><ExternalLink size={18} /> Live Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
