import React, { useContext } from "react";
import styles from "./layout.module.css";
import { ThemeToggle } from "@/contexts/theme.context.js";
export default function Label({ children, htmlFor }) {
  const isDark = useContext(ThemeToggle);
  return (
    <label
      htmlFor={htmlFor}
      className={styles.labelStyle}
      //   style={{ color: `${isDark ? "white" : "black"}` }}
    >
      {children}
    </label>
  );
}
