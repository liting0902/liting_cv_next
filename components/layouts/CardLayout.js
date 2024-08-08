import React, { memo } from "react";
import { motion } from "framer-motion";
import styles from "./layout.module.css";
function CardLayout(props) {
  const { overrideStyle } = props;
  return (
    <React.Fragment>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={!!overrideStyle ? overrideStyle : null}
          className={styles.card}
        >
          {props.children}
        </div>
      </motion.span>
    </React.Fragment>
  );
}
export default memo(CardLayout);
