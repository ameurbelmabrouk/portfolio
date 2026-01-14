// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    padding: '15px 0',
};

const navItemStyle = {
    margin: '0 15px',
    fontWeight: 500,
    color: 'var(--color-light-text)',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer',
};

const Header = ({ toggleTheme, theme }) => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={headerStyle}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-primary)' }}>
                    Ameur BELMABROUK
                </div>
                <nav>
                    {['Home', 'About', 'Skills', 'Projects', 'CV','Contact'].map((item) => (
                        <a 
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={navItemStyle}
                        >
                            <motion.span whileHover={{ color: 'var(--color-primary)' }}>
                                {item}
                            </motion.span>
                        </a>
                    ))}
                </nav>
                {/* 🌙 Dark Mode Button */}
                <button
                    onClick={toggleTheme}
                    className="theme-toggle"
                    aria-label="Toggle dark mode"
                >
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button> 
            </div>
        </motion.header>
    );
};

export default Header;
