import React from "react";
import { motion } from "framer-motion";
import styles from "./layout.module.css";
function StyledList({ index, children, isDarkMode }) {
  const fontColor = isDarkMode ? `white` : `black`;
  return (
    <React.Fragment>
      <motion.li
        key={index}
        initial={{
          opacity: 0,
          translateX: 20,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          translateY: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2 * index,
        }}
      >
        <span className={styles.listStyle}>{children}</span>
      </motion.li>
    </React.Fragment>
  );
}

export default StyledList;
