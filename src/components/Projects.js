// src/components/Projects.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTaxi, FaImage, FaUser, FaCalendarCheck, FaHome, FaCashRegister } from 'react-icons/fa';

const PROJECTS = [
  {
    title: "KidTaxi – Smart Child Transportation Platform (Master Project)",
    tags: ["Flutter", "Laravel", "Firebase", "MySQL", "Google Maps API"],
    desc: "Master graduation project. A complete child transportation platform allowing parents to book, track, and monitor drivers in real time. Includes mobile apps for parents and drivers, plus an admin dashboard with authentication, notifications, and live GPS tracking.",
    icon: <FaTaxi />,
    color: "#feca57",
    image: "/projects/kidtaxi.png" // Add your screenshot here
  },
  {
    title: "Image Processing & Segmentation Desktop Application (Licence Project)",
    tags: ["Python", "OpenGL", "Java Swing"],
    desc: "Licence graduation project. Desktop application for image processing and segmentation. Implemented Median Filter, Gaussian Blur, Sharpening, Edge Detection, Grayscale conversion, and image segmentation using Python and OpenGL with a Java Swing interface.",
    icon: <FaImage />,
    color: "#48dbfb",
    image: "/projects/image-processing.png"
  },
  {
    title: "Modern Front-End Portfolio",
    tags: ["React", "Framer Motion", "CSS"],
    desc: "Personal portfolio website showcasing front-end development skills, projects, and professional background with smooth animations and responsive design.",
    icon: <FaUser />,
    color: "#ff6348",
    image: "/projects/portfolio.png"
  },
  {
    title: "Medical Cabinet Appointment System (Doctor Cabinet)",
    tags: ["React", "CSS3", "State Management"],
    desc: "Professional web application for managing medical appointments, doctor availability, and calendar-based scheduling. Features a modular dashboard for cabinet staff with efficient state management and real clinic workflows.",
    icon: <FaCalendarCheck />,
    color: "#4ecdc4",
    image: "/projects/medical-cabinet.png"
  },
  {
    title: "Property / House Rent Website (Rental Platform)",
    tags: ["React", "CSS3", "Responsive Design"],
    desc: "Dynamic rental platform with property listings, interactive filters, and property detail pages. Features responsive grids, image galleries, map layouts, and both user-facing pages and owner/admin dashboards optimized for browsing rental properties.",
    icon: <FaHome />,
    color: "#ff6b6b",
    image: "/projects/rental-platform.png"
  },
  {
    title: "Grocery POS System (Desktop Application)",
    tags: ["React", "CSS3", "Desktop UI"],
    desc: "Fast and responsive Point-of-Sale system for retail operations. Built with React for quick interaction handling sales and inventory management. Features product lists, cart updates, and sales flow with a practical desktop-optimized interface.",
    icon: <FaCashRegister />,
    color: "#95e1d3",
    image: "/projects/grocery-pos.png"
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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(5px)",
    transition: {
      duration: 0.3
    }
  }
};

/* ===== Project Card Component ===== */

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="card project-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      {/* Preview Image Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              height: '200px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              zIndex: 10,
              backgroundColor: '#f0f0f0'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                // Fallback gradient if image doesn't exist
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                parent.style.background = `linear-gradient(135deg, ${project.color}40, ${project.color}20)`;
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.style.fontSize = '64px';
                parent.style.color = project.color;
                parent.innerHTML = '';
                const iconContainer = document.createElement('div');
                parent.appendChild(iconContainer);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Icon */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.3 : 1,
          scale: isHovered ? 0.9 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: '48px',
          color: project.color,
          marginBottom: '20px'
        }}
      >
        {project.icon}
      </motion.div>

      {/* Project Content */}
      <motion.div
        animate={{
          y: isHovered ? 180 : 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
    </motion.div>
  );
};

/* ===== Main Component ===== */

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
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
