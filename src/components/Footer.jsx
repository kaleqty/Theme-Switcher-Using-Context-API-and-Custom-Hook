// Footer.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer style={{
      backgroundColor: theme === 'dark' ? '#333' : '#f8f9fa',
      color: theme === 'dark' ? '#fff' : '#333',
      padding: '1rem',
      textAlign: 'center',
      borderTop: `1px solid ${theme === 'dark' ? '#444' : '#ddd'}`,
      transition: 'all 0.3s ease'
    }}>
      <p>&copy; {new Date().getFullYear()} Theme Switcher App </p>
      <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
        Built with React, Context API, and Custom Hooks
      </p>
    </footer>
  );
};

export default Footer;