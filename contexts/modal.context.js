import React, { createContext, useReducer } from "react";
import modalTogglerReducer from "../reducers/trueFalseToggler.reducer.js";

export const ModalToggle = createContext();
export const DispatchModalToggler = createContext();

const initialState = false;

export function ModalTogglerProvider({ children }) {
	const [openModal, modalDispatch] = useReducer(
		modalTogglerReducer,
		initialState
	);
	return (
		<ModalToggle.Provider value={openModal}>
			<DispatchModalToggler.Provider value={modalDispatch}>
				{children}
			</DispatchModalToggler.Provider>
		</ModalToggle.Provider>
	);
}
