// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: "KidTaxi – Smart Child Transportation Platform (Master Project)",
    tags: ["Flutter", "Laravel", "Firebase", "MySQL", "Google Maps API"],
    desc: "Master graduation project. A complete child transportation platform allowing parents to book, track, and monitor drivers in real time. Includes mobile apps for parents and drivers, plus an admin dashboard with authentication, notifications, and live GPS tracking."
  },
  {
    title: "Image Processing & Segmentation Desktop Application (Licence Project)",
    tags: ["Python", "OpenGL", "Java Swing"],
    desc: "Licence graduation project. Desktop application for image processing and segmentation. Implemented Median Filter, Gaussian Blur, Sharpening, Edge Detection, Grayscale conversion, and image segmentation using Python and OpenGL with a Java Swing interface."
  },
  {
    title: "Modern Front-End Portfolio",
    tags: ["React", "Framer Motion", "CSS"],
    desc: "Personal portfolio website showcasing front-end development skills, projects, and professional background with smooth animations and responsive design."
  }
];

/* ===== Framer Motion Variants ===== */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

/* ===== Component ===== */

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">

        {/* Section Title */}
        <motion.h2
          className="section-heading"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Recent Work
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card"
              whileHover={{ scale: 1.06 }}
            >
              <h4
                style={{
                  fontSize: '22px',
                  color: 'var(--color-text)',
                  marginBottom: '12px'
                }}
              >
                {project.title}
              </h4>

              <p
                style={{
                  color: 'var(--color-light-text)',
                  marginBottom: '18px',
                  lineHeight: '1.6'
                }}
              >
                {project.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      backgroundColor: '#e6eaf3',
                      padding: '6px 12px',
                      borderRadius: '20px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
