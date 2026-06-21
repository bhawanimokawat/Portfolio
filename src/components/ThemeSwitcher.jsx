import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme, themes } = useTheme();

  return (
    <div className="flex flex-wrap items-center gap-2">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => toggleTheme(t)}
          className={`px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm md:px-4 md:text-base rounded-lg border capitalize transition-all duration-300 ${
            theme === t
              ? "bg-[var(--accent)] text-white border-[var(--accent)]"
              : "text-[var(--text)] border-gray-400 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;