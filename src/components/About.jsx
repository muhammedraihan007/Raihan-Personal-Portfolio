import React from 'react';
import Section from './Section';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="about-grid">
                <div className="about-text-content">
                    <p className="about-description">
                        I am an Integrated MCA graduate with hands-on experience in software and web development.
                        My expertise spans across both backend and frontend technologies, including Python, Django,
                        FastAPI, React.js, JavaScript, PHP, SQL, and MongoDB. I am constantly seeking opportunities
                        to apply my technical skills to real-world projects and grow within a collaborative development team.
                    </p>

                    <div className="stats-container">
                        <div className="stat-item card">
                            <h3 className="stat-number">2+</h3>
                            <p className="stat-label">Years of Studies & Internships</p>
                        </div>
                        <div className="stat-item card">
                            <h3 className="stat-number">4+</h3>
                            <p className="stat-label">Major Projects Built</p>
                        </div>
                    </div>
                </div>

                <div className="timeline-container">
                    <h3 className="timeline-title"><GraduationCap className="inline-icon" /> Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4 className="timeline-degree">Integrated Master of Computer Application</h4>
                            <p className="timeline-school">SCMS School of Technology & Management, Kerala</p>
                            <span className="timeline-date"><Calendar size={14} /> 2018 – 2023</span>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4 className="timeline-degree">Higher Secondary Education (Computer Science)</h4>
                            <p className="timeline-school">Kasturba English Medium School (CBSE), Kerala</p>
                            <span className="timeline-date"><Calendar size={14} /> 2016 – 2018</span>
                        </div>
                    </div>

                    <h3 className="timeline-title mt-8"><Award className="inline-icon" /> Certificates</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4 className="timeline-degree">MERN Stack Development</h4>
                            <p className="timeline-school">Right Soft Options, Kaloor</p>
                            <span className="timeline-date"><Calendar size={14} /> Jul 2024 – Jan 2025</span>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4 className="timeline-degree">Full Stack Python Developer</h4>
                            <p className="timeline-school">IROHUB, Kochi</p>
                            <span className="timeline-date"><Calendar size={14} /> Aug 2023 – Feb 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
