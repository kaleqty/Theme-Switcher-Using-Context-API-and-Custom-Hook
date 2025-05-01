// Navbar.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className={`navbar ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} 
         style={{
           backgroundColor: theme === 'dark' ? '#333' : '#f8f9fa',
           color: theme === 'dark' ? '#fff' : '#333',
           padding: '1rem',
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center'
         }}>
      <div className="navbar-brand" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Theme Switcher App
      </div>
      <button 
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'dark' ? '#f8f9fa' : '#333',
          color: theme === 'dark' ? '#333' : '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </nav>
  );
};

export default Navbar;