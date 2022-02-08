import React, { createContext, useReducer } from "react";
import themeTogglerReducer from "../reducers/trueFalseToggler.reducer.js";

export const ThemeToggle = createContext();
export const DispatchThemeToggler = createContext();

const isDarkTheme = true;

export function ThemeTogglerProvider({ children }) {
	const [isDark, themeDispatch] = useReducer(
		themeTogglerReducer,
		isDarkTheme
	);
	return (
		<ThemeToggle.Provider value={isDark}>
			<DispatchThemeToggler.Provider value={themeDispatch}>
				{children}
			</DispatchThemeToggler.Provider>
		</ThemeToggle.Provider>
	);
}
