// src/context/ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const themes = ["light", "dark", "solarized"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    themes.forEach(t => root.classList.remove(t));
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = (t) => setTheme(t);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);