// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add some global styles
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  body {
    transition: all 0.3s ease;
  }
  
  h1, h2 {
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  code {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);