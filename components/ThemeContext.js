import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [backgroundColor, setBackgroundColor] = useState('bg-white');
  const [textColor, setTextColor] = useState('black');
  const [cardsBackgroundColor, setCardsBackgroundColor] = useState('bg-white');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setBackgroundColor('bg-gray-900');
      setCardsBackgroundColor('bg-gray-800');
      setTextColor('white');
    } else {
      setTheme('light');
      setBackgroundColor('bg-white');
      setCardsBackgroundColor('bg-white');
      setTextColor('black');
    }
  };
  return (
    <ThemeContext.Provider
      value={{ backgroundColor, textColor, cardsBackgroundColor, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useContextTheme = () => {
  return useContext(ThemeContext);
};
