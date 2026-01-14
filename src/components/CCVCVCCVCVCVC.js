// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaTaxi, FaImage, FaUser, FaCalendarCheck, FaHome, FaCashRegister } from 'react-icons/fa';

const PROJECTS = [
  {
    title: "KidTaxi – Smart Child Transportation Platform (Master Project)",
    tags: ["Flutter", "Laravel", "Firebase", "MySQL", "Google Maps API"],
    desc: "Master graduation project. A complete child transportation platform allowing parents to book, track, and monitor drivers in real time. Includes mobile apps for parents and drivers, plus an admin dashboard with authentication, notifications, and live GPS tracking.",
    icon: <FaTaxi />,
    color: "#feca57"
  },
  {
    title: "Image Processing & Segmentation Desktop Application (Licence Project)",
    tags: ["Python", "OpenGL", "Java Swing"],
    desc: "Licence graduation project. Desktop application for image processing and segmentation. Implemented Median Filter, Gaussian Blur, Sharpening, Edge Detection, Grayscale conversion, and image segmentation using Python and OpenGL with a Java Swing interface.",
    icon: <FaImage />,
    color: "#48dbfb"
  },
  {
    title: "Modern Front-End Portfolio",
    tags: ["React", "Framer Motion", "CSS"],
    desc: "Personal portfolio website showcasing front-end development skills, projects, and professional background with smooth animations and responsive design.",
    icon: <FaUser />,
    color: "#ff6348"
  },
  {
    title: "Medical Cabinet Appointment System (Doctor Cabinet)",
    tags: ["React", "CSS3", "State Management"],
    desc: "Professional web application for managing medical appointments, doctor availability, and calendar-based scheduling. Features a modular dashboard for cabinet staff with efficient state management and real clinic workflows.",
    icon: <FaCalendarCheck />,
    color: "#4ecdc4"
  },
  {
    title: "Property / House Rent Website (Rental Platform)",
    tags: ["React", "CSS3", "Responsive Design"],
    desc: "Dynamic rental platform with property listings, interactive filters, and property detail pages. Features responsive grids, image galleries, map layouts, and both user-facing pages and owner/admin dashboards optimized for browsing rental properties.",
    icon: <FaHome />,
    color: "#ff6b6b"
  },
  {
    title: "Grocery POS System (Desktop Application)",
    tags: ["React", "CSS3", "Desktop UI"],
    desc: "Fast and responsive Point-of-Sale system for retail operations. Built with React for quick interaction handling sales and inventory management. Features product lists, cart updates, and sales flow with a practical desktop-optimized interface.",
    icon: <FaCashRegister />,
    color: "#95e1d3"
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
              {/* Project Icon */}
              <div
                style={{
                  fontSize: '48px',
                  color: project.color,
                  marginBottom: '20px'
                }}
              >
                {project.icon}
              </div>

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
                    className="tech-tag"
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
