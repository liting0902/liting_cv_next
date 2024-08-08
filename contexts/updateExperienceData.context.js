"use client";
import React, { createContext, useReducer } from "react";
import dataReducer from "../reducers/data.reducer.js";

export const UpdateExperienceDataContext = createContext();
export const UpdateExperienceDataDispatchContext = createContext();

export function UpdateExperienceDataProvider(props) {
  let initialValue = null;
  const [experienceData, experienceDataDispatch] = useReducer(
    dataReducer,
    initialValue
  );
  return (
    <UpdateExperienceDataContext.Provider value={experienceData}>
      <UpdateExperienceDataDispatchContext.Provider
        value={experienceDataDispatch}
      >
        {props.children}
      </UpdateExperienceDataDispatchContext.Provider>
    </UpdateExperienceDataContext.Provider>
  );
}
