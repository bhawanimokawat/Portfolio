// src/hooks/useTheme.js
import { useState, useEffect } from "react";

const themes = ["light", "dark", "solarized"];

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    themes.forEach(t => root.classList.remove(t));
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = (nextTheme) => setTheme(nextTheme);

  return { theme, toggleTheme, themes };
}
 