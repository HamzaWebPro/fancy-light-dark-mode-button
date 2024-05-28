"use client";
import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "../_context/theme";

const ThemeContainer = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const [themeClass, setThemeClass] = useState();


  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    setThemeClass(themeMode);
  }, [themeMode]);

  

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeClass(storedTheme);
    }
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.keyCode === 74) || e.keyCode === 123) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className={`${themeClass} duration-300 overflow-x-hidden`}>
        <div className="bg-lite-bg dark:bg-dark-bg">
          <>{children}</>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default ThemeContainer;
