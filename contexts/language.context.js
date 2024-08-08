"use client";
import React, { createContext, useReducer, useEffect } from "react";
import localeReducer from "../reducers/locale.reducer";

export const LanguageContext = createContext();
export const LangDispatchContext = createContext();

export function LanguageProvider(props) {
  const [language, dispatch] = useReducer(localeReducer, "zh");

  useEffect(() => {
    if (document) {
      const lang = document.cookie.split(";").map((ele) => {
        const elePair = ele.split("=");
        return elePair[0] === "NEXT_LOCALE" && elePair[1];
      })[0];
      dispatch({ type: "TRANSLATE", language: lang ? lang : "zh" });
    }
  }, []);
  return (
    <LanguageContext.Provider value={language}>
      <LangDispatchContext.Provider value={dispatch}>
        {props.children}
      </LangDispatchContext.Provider>
    </LanguageContext.Provider>
  );
}
