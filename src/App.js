// App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import { useTheme } from './context/ThemeContext';

// Wrapper component to apply theme to body
const ThemedApp = () => {
  const { theme } = useTheme();
  
  // Apply theme to body element
  React.useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#121212' : '#ffffff';
    document.body.style.color = theme === 'dark' ? '#ffffff' : '#212529';
    document.body.style.transition = 'all 0.3s ease';
  }, [theme]);

  return (
    <div className={`app theme-${theme}`} style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;