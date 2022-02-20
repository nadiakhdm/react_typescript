import React from "react";
import { createContext } from "react";
import { theme } from "./theme";
type ThemecontextProps = {
    children: React.ReactNode;
  };
export const ThemeContext = createContext(theme);

export const ThemContextProvider = ({ children }: ThemecontextProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
