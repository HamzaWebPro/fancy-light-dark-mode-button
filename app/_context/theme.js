import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode:
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("theme") &&
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("theme"),
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;
