// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaCalendarCheck, FaHome, FaCashRegister } from 'react-icons/fa';

const PROJECTS = [
    {
        title: "Medical Cabinet Appointment System",
        subtitle: "Doctor Cabinet Management",
        description: "Professional web application for managing medical appointments, doctor availability, and calendar-based scheduling with a modular dashboard for cabinet staff.",
        tech: ["React", "CSS3", "State Management"],
        icon: <FaCalendarCheck />,
        color: "#4ecdc4"
    },
    {
        title: "Property / House Rent Website",
        subtitle: "Rental Platform",
        description: "Dynamic rental platform with property listings, interactive filters, image galleries, and map layouts. Features user-facing pages and owner/admin dashboards.",
        tech: ["React", "CSS3", "Responsive Design"],
        icon: <FaHome />,
        color: "#ff6b6b"
    },
    {
        title: "Grocery POS System",
        subtitle: "Desktop Application",
        description: "Fast and responsive Point-of-Sale system with product management, cart updates, and sales flow. Optimized interface for daily retail operations.",
        tech: ["React", "CSS3", "Desktop UI"],
        icon: <FaCashRegister />,
        color: "#95e1d3"
    }
];

const containerVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <motion.h2 
                    className="section-heading" 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Recent Work
                </motion.h2>
                
                <motion.div 
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                        gap: '30px' 
                    }}
                    variants={containerVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants} 
                            className="card project-card"
                        >
                            <div 
                                className="project-icon" 
                                style={{ 
                                    fontSize: '48px', 
                                    marginBottom: '20px',
                                    color: project.color
                                }}
                            >
                                {project.icon}
                            </div>
                            
                            <h3 style={{ 
                                fontSize: '22px', 
                                color: 'var(--color-primary)', 
                                marginBottom: '8px',
                                fontWeight: '700'
                            }}>
                                {project.title}
                            </h3>
                            
                            <p style={{ 
                                fontSize: '14px', 
                                color: 'var(--color-light-text)', 
                                marginBottom: '15px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {project.subtitle}
                            </p>
                            
                            <p style={{ 
                                color: 'var(--color-light-text)', 
                                marginBottom: '20px',
                                lineHeight: '1.7',
                                fontSize: '15px'
                            }}>
                                {project.description}
                            </p>
                            
                            <div className="tech-stack" style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                gap: '8px',
                                marginTop: 'auto'
                            }}>
                                {project.tech.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="tech-tag"
                                        style={{
                                            background: 'rgba(74, 105, 189, 0.1)',
                                            color: 'var(--color-primary)',
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            border: '1px solid rgba(74, 105, 189, 0.2)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ 
                        textAlign: 'center', 
                        marginTop: '50px', 
                        fontSize: '16px',
                        color: 'var(--color-light-text)'
                    }}
                >
                    Want to see more details about these projects?{' '}
                    <a 
                        href="#contact" 
                        style={{ 
                            color: 'var(--color-primary)', 
                            fontWeight: 600,
                            textDecoration: 'none'
                        }}
                    >
                        Let's talk →
                    </a>
                </motion.p>
            </div>
        </section>
    );
};

export default Projects;
