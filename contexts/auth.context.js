import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/auth.reducer.js";

export const AuthContext = createContext();
export const AuthDispatchContext = createContext();

export function AuthProvider(props) {
	const initialValue = {
		uid: null,
		expirationTime: null,
		idToken: null,
	};
	const [authInfo, authDispatch] = useReducer(authReducer, initialValue);
	return (
		<AuthContext.Provider value={authInfo}>
			<AuthDispatchContext.Provider value={authDispatch}>
				{props.children}
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	);
}
