// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
};

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="footer-content">
                <h3>Ameur BELMABROUK</h3>
                <p>
                   Ingénieur Informatique - Développeur Frontend Jr.
                </p>

                <div className="socials">
                    <motion.a
                        className="social-icon"
                        href="https://www.linkedin.com/in/ameur-belmabrouk-802038254/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12 }}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </motion.a>

                    <motion.a
                        className="social-icon"
                        href="https://www.instagram.com/amer_mts/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12 }}
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </motion.a>

                    <motion.a
                        className="social-icon"
                        href="https://github.com/ameurbelmabrouk"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12 }}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </motion.a>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 Ameur BELMABROUK 
            </div>
        </motion.footer>
    );
};

export default Footer;
