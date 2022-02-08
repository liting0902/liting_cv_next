import React, { createContext, useReducer } from "react";
import dataReducer from "../reducers/data.reducer.js";

export const SetExperienceContext = createContext();
export const SetExperienceDispatchContext = createContext();

export function SetExperienceProvider(props) {
	let initialValue = null;
	const [experience, setExperienceDispatch] = useReducer(
		dataReducer,
		initialValue
	);
	return (
		<SetExperienceContext.Provider value={experience}>
			<SetExperienceDispatchContext.Provider
				value={setExperienceDispatch}>
				{props.children}
			</SetExperienceDispatchContext.Provider>
		</SetExperienceContext.Provider>
	);
}
