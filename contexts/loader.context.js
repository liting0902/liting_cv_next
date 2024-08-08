"use client";
import React, { createContext, useReducer, useEffect } from "react";
import loaderTogglerReducer from "../reducers/trueFalseToggler.reducer.js";

export const LoaderToggle = createContext();
export const DispatchLoaderToggler = createContext();

const initialState = false;

export function LoaderTogglerProvider({ children }) {
  const [isLoading, loaderDispatch] = useReducer(
    loaderTogglerReducer,
    initialState
  );

  return (
    <LoaderToggle.Provider value={isLoading}>
      <DispatchLoaderToggler.Provider value={loaderDispatch}>
        {children}
      </DispatchLoaderToggler.Provider>
    </LoaderToggle.Provider>
  );
}
