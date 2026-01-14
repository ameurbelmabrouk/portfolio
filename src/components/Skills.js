// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
    { title: "React Development", icon: "⚛️", description: "Modern, component-based frontend with smooth user experiences." },
    { title: "Backend API", icon: "🌐", description: "Building robust, scalable APIs using Node.js and Express." },
    { title: "UI/UX Design", icon: "🎨", description: "Clean, minimal design focused on usability and accessibility." },
    { title: "Consulting", icon: "💡", description: "Providing trustworthy advice for your digital strategy and architecture." },
];

const containerVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
    return (
        <section>
            <div className="container">
                <motion.h2 className="section-heading" {...itemVariants} viewport={{ once: true }}>My Core Services</motion.h2>
                
                <motion.div 
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                        gap: '30px' 
                    }}
                    variants={containerVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {SKILLS.map((skill, index) => (
                        <motion.div key={index} variants={itemVariants} className="card">
                            <h3 style={{ fontSize: '36px', marginBottom: '10px' }}>{skill.icon}</h3>
                            <h4 style={{ fontSize: '20px', color: 'var(--color-primary)', marginBottom: '10px' }}>{skill.title}</h4>
                            <p style={{ color: 'var(--color-light-text)' }}>{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.p 
                    {...itemVariants} 
                    viewport={{ once: true, amount: 0.1 }}
                    style={{ textAlign: 'center', marginTop: '40px', fontSize: '16px' }}
                >
                    <a href="#projects" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>See my work samples →</a>
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
