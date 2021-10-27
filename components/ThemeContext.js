import React, { useContext, useEffect, useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-100');
  const [textColor, setTextColor] = useState('black');
  const [cardsBackgroundColor, setCardsBackgroundColor] = useState('bg-white');

  const setThemeColor = (color) => {
    if (color === 'light') {
      setTheme('light');
      setBackgroundColor('bg-gray-100');
      setCardsBackgroundColor('bg-white');
      setTextColor('black');
    }
    if (color === 'dark') {
      setTheme('dark');
      setBackgroundColor('bg-gray-900');
      setCardsBackgroundColor('bg-gray-800');
      setTextColor('white');
    }
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setThemeColor('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setThemeColor('light');
    }
  };

  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme');
    if (!localTheme) {
      window.localStorage.setItem('theme', theme);
      localTheme = theme;
    }

    setThemeColor(localTheme);

    // eslint-disable-next-line
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        backgroundColor,
        textColor,
        cardsBackgroundColor,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useContextTheme = () => {
  return useContext(ThemeContext);
};
