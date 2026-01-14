// src/components/Chatbot.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentStep, setCurrentStep] = useState('welcome');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && showWelcome) {
      setTimeout(() => {
        addBotMessage(
          "👋 Hi! I'm Ameur's assistant.\n\nI can help you with:\n• Web development\n• React projects\n• Freelance services",
          ['💻 Services', '📁 Projects', '📩 Contact Ameur']
        );
        setShowWelcome(false);
      }, 500);
    }
  }, [isOpen, showWelcome]);

  const addBotMessage = (text, buttons = []) => {
    setMessages((prev) => [
      ...prev,
      {
        type: 'bot',
        text,
        buttons,
        timestamp: new Date(),
      },
    ]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        type: 'user',
        text,
        timestamp: new Date(),
      },
    ]);
  };

  const handleButtonClick = (button) => {
    addUserMessage(button);

    setTimeout(() => {
      if (button === '💻 Services') {
        addBotMessage(
          "Ameur offers:\n\n✔ React websites\n✔ Front-end UI/UX\n✔ Fixing bugs\n✔ Portfolio & business websites",
          ['👉 Start a project', '🔙 Back to menu']
        );
        setCurrentStep('services');
      } else if (button === '📁 Projects') {
        addBotMessage(
          "Ameur worked on:\n\n• KidTaxi (Master Project)\n• Image Processing App\n• Modern Portfolio\n\nWant to see more details?",
          ['🔍 View Projects', '🔙 Back to menu']
        );
        setCurrentStep('projects');
      } else if (button === '📩 Contact Ameur') {
        addBotMessage(
          "📩 You can contact Ameur:\n\nEmail: ameurbelmabrouk1@gmail.com\n\nI'll be happy to discuss your project!",
          ['✉️ Send Email', '🔙 Back to menu']
        );
        setCurrentStep('contact');
      } else if (button === '👉 Start a project') {
        addBotMessage(
          "Great! 🎉\n\nWhat type of website do you need?",
          ['🛍️ E-commerce', '💼 Portfolio', '🏢 Business', '🎨 Custom']
        );
        setCurrentStep('project-type');
      } else if (button === '🔍 View Projects') {
        addBotMessage("Taking you to the projects section! 🚀");
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (button === '✉️ Send Email') {
        window.location.href = 'mailto:ameurbelmabrouk1@gmail.com';
        addBotMessage("Email client opened! 📧");
      } else if (button === '🔙 Back to menu') {
        addBotMessage(
          "👋 How can I help you?",
          ['💻 Services', '📁 Projects', '📩 Contact Ameur']
        );
        setCurrentStep('welcome');
      } else if (['🛍️ E-commerce', '💼 Portfolio', '🏢 Business', '🎨 Custom'].includes(button)) {
        addBotMessage(
          `Perfect! ${button.split(' ')[1]} website noted. ✅\n\nWhen do you need it?`,
          ['⚡ ASAP', '📅 1-2 weeks', '🗓️ 1 month', '💬 Discuss timing']
        );
        setCurrentStep('timeline');
      } else if (['⚡ ASAP', '📅 1-2 weeks', '🗓️ 1 month', '💬 Discuss timing'].includes(button)) {
        addBotMessage(
          `Got it! ${button}\n\nDo you have a budget in mind?`,
          ['💰 Under 20000.00 DZD', '💵 20000.00 DZD-50000.00 DZD', '💸 10000.00 DZD', '💬 Discuss budget']
        );
        setCurrentStep('budget');
      } else if (['💰 Under 20000.00 DZD', '💵 20000.00 DZD-50000.00 DZD', '💸 10000.00 DZD', '💬 Discuss budget'].includes(button)) {
        addBotMessage(
          `Perfect! 👍\n\nAmeur will contact you soon to discuss the details.\n\nPlease send an email to get started!`,
          ['✉️ Send Email', '🔙 Back to menu']
        );
        setCurrentStep('final');
      }
    }, 800);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className={`chatbot-toggle ${theme === 'dark' ? 'dark' : ''}`}
        onClick={toggleChat}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`chatbot-window ${theme === 'dark' ? 'dark' : ''}`}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <FaRobot className="chatbot-header-icon" />
                <div>
                  <h4>Ameur's Assistant</h4>
                  <span className="status">
                    <span className="status-dot"></span> Online
                  </span>
                </div>
              </div>
              <button onClick={closeChat} className="chatbot-close">
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`message ${msg.type}`}
                >
                  {msg.type === 'bot' && (
                    <div className="message-avatar">
                      <FaRobot />
                    </div>
                  )}
                  <div className="message-content">
                    <div className="message-text">{msg.text}</div>
                    {msg.buttons && msg.buttons.length > 0 && (
                      <div className="message-buttons">
                        {msg.buttons.map((button, btnIndex) => (
                          <motion.button
                            key={btnIndex}
                            onClick={() => handleButtonClick(button)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="message-button"
                          >
                            {button}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="chatbot-footer">
              <div className="chatbot-footer-text">
                Powered by Ameur's AI Assistant
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
