// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    viewport: { once: true, amount: 0.2 }
};

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <motion.h2 className="section-heading" {...fadeIn}>About Me</motion.h2>
                <motion.div 
                    {...fadeIn}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.8' }}
                >
                    <p style={{marginBottom: '20px', color: 'var(--color-light-text)'}}>
                        I am <strong>Ameur BELMABROUK</strong>, a dedicated freelance developer with a strong focus on web development, Python, and data analytics. I enjoy solving real-world problems by creating modern, efficient, and user-friendly digital solutions.
                    </p>
                    <p style={{marginBottom: '20px', color: 'var(--color-light-text)'}}>
                        I specialize in <strong>React, Node.js, and Python programming</strong>, and I’m always learning new skills to expand my capabilities. I aim to provide solutions that are not only functional but also easy for clients to use and maintain.
                    </p>
                    <p style={{marginBottom: '20px', color: 'var(--color-light-text)'}}>
                        I take pride in being approachable and beginner-friendly for clients—whether it’s a small freelance task or a larger project, I ensure clear communication, timely delivery, and trustworthy results. Outside of coding, I enjoy exploring new technologies, working on personal projects, and building a strong professional network.
                    </p>
                    <a href="#contact" className="btn-primary" style={{marginTop: '20px'}}>
                        View My Services Below →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
