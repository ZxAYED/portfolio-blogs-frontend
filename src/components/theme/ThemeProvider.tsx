/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme: Theme;
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  if (theme === null) return null;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const getInitialTheme = (req: any) => {
  const themeFromCookie = req.cookies.theme as Theme | undefined;
  return themeFromCookie || "dark";
};
