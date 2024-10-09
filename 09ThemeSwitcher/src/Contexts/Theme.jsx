import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
    document.documentElement.classList.add("dark"); // adds 'dark' class to <html> for Tailwind dark mode
  };

  const lightTheme = () => {
    setThemeMode("light");
    document.documentElement.classList.remove("dark"); // removes 'dark' class from <html>
  };

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
