import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import your context

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Initial theme state

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
