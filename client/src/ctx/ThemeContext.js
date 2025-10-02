import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Cookies.get('theme') || 'light');
  const [consented, setConsented] = useState(Cookies.get('consent') || false);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      Cookies.set('theme', newTheme, { expires: 365 });
      return newTheme;
    });
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, consented:consented, setConsented:setConsented }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;