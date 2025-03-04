"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "../theme/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md  bg-gray-800 text-white transition-colors"
    >
      {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
};

export default ThemeToggle;
