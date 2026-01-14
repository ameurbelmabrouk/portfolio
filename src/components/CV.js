// src/components/CV.js
import React from 'react';
import { motion } from 'framer-motion';

const CV = () => {
  return (
    <section id="cv">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <a href="/Ameur_Belmabrouk_CV.pdf" download className="btn-primary">
            Download CV
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}
        >
          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>
              Education
            </h3>

            <div className="card">
              <h4>Master's Degree in Computer Science</h4>
              <p style={{ color: 'var(--color-light-text)', margin: '5px 0' }}>
                Database Systems
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-light-text)' }}>
                University of Mohamed Khider, Algeria · 2021 – 2024
              </p>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
              <h4>Bachelor's Degree in Computer Science</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-light-text)' }}>
                University of Mohamed Khider, Algeria · 2018 – 2021
              </p>
            </div>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>
              Experience
            </h3>

            <div className="card">
              <h4>IT Technician</h4>
              <p style={{ color: 'var(--color-light-text)', margin: '5px 0' }}>
                SPA BABAHOUM · May 2025 – Present
              </p>
              <p>
                Maintaining and improving company IT systems, providing hardware
                and software support, managing networks, system updates, and
                ensuring smooth daily IT operations.
              </p>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
              <h4>Freelance – Front-End Development & Digital Projects</h4>
              <p style={{ color: 'var(--color-light-text)', margin: '5px 0' }}>
                2024 – Present
              </p>
              <p>
                Working as a freelance front-end developer, building modern and responsive
                websites using React, HTML, CSS, and JavaScript. In parallel, managed
                international dropshipping stores with Shopify, handled product research,
                order management, and customer support, and created digital content and ads
                for social media marketing. Continuing freelance work until now.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CV;
