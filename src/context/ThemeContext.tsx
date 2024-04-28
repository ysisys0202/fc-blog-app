import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext({
  theme: "light",
  toggleThemeMode: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );
  function toggleThemeMode() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
