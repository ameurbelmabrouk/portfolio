import React from 'react';
import { motion } from 'framer-motion';
import ProfilePic from '../ameur.jpeg';

const Hero = () => {
  return (
    <section
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '50px',
          padding: '40px 0',
          flexWrap: 'wrap'
        }}
      >
        {/* PROFILE WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          style={{ flex: '0 0 250px' }}
        >
          <div className="profile-glow">
            <img
              src={ProfilePic}
              alt="Ameur Belmabrouk"
              className="profile-img"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 50%' }}
        >
          <p style={{ fontSize: '20px', color: 'var(--color-light-text)', marginBottom: '10px' }}>
            Hi, I'm <strong>Ameur BELMABROUK</strong>
          </p>

          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: 'var(--color-text)',
              marginBottom: '20px'
            }}
          >
            Freelance Developer & Digital Problem Solver
          </h1>

          <p style={{ fontSize: '18px', color: 'var(--color-light-text)', marginBottom: '30px' }}>
            I create modern, reliable web solutions for businesses.
          </p>

          <a href="#contact" className="btn-primary">
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
