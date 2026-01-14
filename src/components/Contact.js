// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section>
            <div className="container">
                <motion.h2 
                    className="section-heading"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ 
                        maxWidth: '700px', 
                        margin: '0 auto'
                    }}
                >
                    <div className="card" style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '18px', marginBottom: '30px', color: 'var(--color-light-text)', lineHeight: '1.8' }}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect and create something amazing together!
                        </p>
                        <a href="mailto:your.email@example.com" className="btn-primary">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
