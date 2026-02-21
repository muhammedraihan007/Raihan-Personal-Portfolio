import React from 'react';
import Section from './Section';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code2 size={24} color="#8b5cf6" />,
            skills: ['Python', 'C', 'C++', 'JavaScript', 'PHP']
        },
        {
            title: 'Web Technologies',
            icon: <Layout size={24} color="#8b5cf6" />,
            skills: ['HTML', 'CSS', 'React.js', 'Axios', 'REST API']
        },
        {
            title: 'Backend & Frameworks',
            icon: <Server size={24} color="#8b5cf6" />,
            skills: ['Django', 'FastAPI', 'Node.js', 'Express.js']
        },
        {
            title: 'Databases',
            icon: <Database size={24} color="#8b5cf6" />,
            skills: ['SQL', 'MongoDB']
        },
        {
            title: 'Tools',
            icon: <Terminal size={24} color="#8b5cf6" />,
            skills: ['Git', 'VS Code']
        },
        {
            title: 'Other',
            icon: <Settings size={24} color="#8b5cf6" />,
            skills: ['Data Analysis', 'Problem-Solving', 'Analytical Thinking']
        }
    ];

    return (
        <Section id="skills" title="Skills & Expertise">
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card card">
                        <div className="skill-icon-wrapper">
                            {category.icon}
                        </div>
                        <h3 className="skill-category-title">{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
