// Content.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Content = () => {
  const { theme } = useTheme();
  
  return (
    <main style={{
      backgroundColor: theme === 'dark' ? '#222' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      minHeight: '70vh',
      padding: '2rem',
      transition: 'all 0.3s ease'
    }}>
      <h1>Welcome to Theme Switcher</h1>
      <p>This is a demonstration of using Context API and custom hooks in React to implement theme switching.</p>
      
      <div style={{ 
        backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
        padding: '1.5rem',
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <h2>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h2>
      </div>
    </main>
  );
};

export default Content;
