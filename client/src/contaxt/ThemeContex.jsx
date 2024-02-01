import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const toggleTheme = () => {
    setIsBlackTheme((prevIsBlackTheme) => !prevIsBlackTheme);
  };

  const theme = {
    bgColor: isBlackTheme ? "#000000" : "#FFFFFF",
    fontColor: isBlackTheme ? "#FFFFFF" : "#000000",
    lightGray: "#CCCCCC",
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
      style={{ border: "1px solid red" }}
    >
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
