import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';
import Chatbot from './components/Chatbot';
import './styles/global.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="cv"><CV /></div>
        <div id="contact"><Contact /></div>
      </main>
      
      <Footer />
      
      {/* Chatbot */}
      <Chatbot theme={theme} />
    </>
  );
}

export default App;
