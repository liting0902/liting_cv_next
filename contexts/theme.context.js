"use client";
import React, { createContext, useReducer, useEffect } from "react";
import themeTogglerReducer from "../reducers/trueFalseToggler.reducer.js";

export const ThemeToggle = createContext();
export const DispatchThemeToggler = createContext();

export function ThemeTogglerProvider({ children }) {
  const [isDark, themeDispatch] = useReducer(themeTogglerReducer, false);
  return (
    <ThemeToggle.Provider value={isDark}>
      <DispatchThemeToggler.Provider value={themeDispatch}>
        {children}
      </DispatchThemeToggler.Provider>
    </ThemeToggle.Provider>
  );
}
