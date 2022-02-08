import React, { createContext, useReducer } from "react";
import localeReducer from "../reducers/locale.reducer";
import { useRouter } from "next/router";

export const LanguageContext = createContext();
export const DispatchContext = createContext();

export function LanguageProvider(props) {
	const router = useRouter();
	const [language, dispatch] = useReducer(localeReducer, router.locale);
	return (
		<LanguageContext.Provider value={language}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</LanguageContext.Provider>
	);
}
