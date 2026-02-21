import React from 'react';
import Section from './Section';
import { Code, Globe, Database, Server } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Full Stack Development',
            description: 'End-to-end web application development using modern frameworks like React, Django, and Node.js.',
            icon: <Globe size={32} color="#06b6d4" />
        },
        {
            title: 'Backend Engineering',
            description: 'Building robust, scalable REST APIs and server-side logic using Python (Django/FastAPI) and Node.js.',
            icon: <Server size={32} color="#06b6d4" />
        },
        {
            title: 'Database Design',
            description: 'Architecting efficient data models and integrating databases like SQL and MongoDB for optimal performance.',
            icon: <Database size={32} color="#06b6d4" />
        },
        {
            title: 'Frontend Development',
            description: 'Creating responsive, interactive, and modern user interfaces with HTML, CSS, JavaScript, and React.',
            icon: <Code size={32} color="#06b6d4" />
        }
    ];

    return (
        <Section id="services" title="My Services">
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card card">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
