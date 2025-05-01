# React Theme Switcher

A responsive React application that demonstrates the implementation of a theme switching functionality using React Context API. Users can toggle between light and dark themes, with the preference saved to localStorage for persistence across browser sessions.

![Welcome - web-lab3 - Visual Studio Code 02_05_2025 1_45_22 am](https://github.com/user-attachments/assets/f7d286fa-22f4-4cb5-bea2-56b7475b9788)
![React App - Google Chrome 02_05_2025 1_45_58 am](https://github.com/user-attachments/assets/12f5f271-3736-4a65-b51e-5e47dd2ee125)

## Technologies Used

- **React**: Frontend library for building user interfaces
- **React Context API**: For global state management of theme preference
- **CSS-in-JS**: Dynamic styling based on current theme
- **localStorage**: Browser API for persisting theme preferences

## Features

- Toggle between light and dark themes
- Persistent theme selection across page refreshes
- Responsive design that works on all device sizes
- Smooth theme transition animations

## Context API Implementation

This project demonstrates the use of React's Context API for state management without additional libraries. Here's how it's implemented:

### ThemeContext Structure

```jsx
// Creates a context with default values
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Provider component that manages theme state
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Custom Hook

A custom hook `useTheme` is created to provide a cleaner way to access the theme context:

```jsx
// Custom hook for components to easily use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### Usage in Components

Components can access and respond to theme changes using the custom hook:

```jsx
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  const styles = {
    navbar: {
      backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
      color: theme === 'light' ? '#212529' : '#f8f9fa',
      // Additional styles...
    },
    // Other styled elements...
  };

  return (
    <header style={styles.navbar}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};
```

## Project Structure

```
theme-switcher/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Content.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Running the Project Locally

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn package manager

### Installation Steps

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/theme-switcher.git
   cd theme-switcher
   ```

2. Install dependencies
   ```bash
   npm install
   # or using yarn
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or using yarn
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Learn More

This project demonstrates several key React concepts:

- **Context API** for global state management
- **Custom Hooks** for encapsulating and reusing stateful logic
- **localStorage** for persisting user preferences
- **Conditional Styling** based on state
- **Component Composition** for building modular UI

For more information on React and Context API, check out:
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Context API Guide](https://reactjs.org/docs/context.html)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
