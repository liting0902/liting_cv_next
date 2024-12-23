import React, { memo, useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import ThemeToggleBtn from "../ThemeToggleBtn.js";
import { ThemeToggle, DispatchThemeToggler } from "@/contexts/theme.context.js";

import styles from "./layout.module.css";
function Modal({
  children,
  toggleHandler,
  selectedID,
  enableThemeToggle,
  overrideStyle,
}) {
  const isDark = useContext(ThemeToggle);
  const themeDispatch = useContext(DispatchThemeToggler);
  // const bgClass = isDark ? [styles.modalContent, styles.modalContentNight].join(" ")
  //   : [styles.modalContent, styles.modalContentDay].join(" ");

  const variants = {
    visible: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
    hidden: {
      opacity: 0,
      translateX: `${selectedID % 2 === 0 ? -25 : 50}`,
    },
  };
  const handleThemeToggle = (e) => {
    e.preventDefault();
    themeDispatch({ type: "TOGGLE", isDark });
  };
  const closeIconSize = "1.6rem";
  return (
    <React.Fragment>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={variants}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgb(0,0,0,0.4)",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
          zIndex: 2,
        }}
        data-cy="modal"
      >
        <div
          style={{
            // background: `${bgColor}`,
            ...(!!overrideStyle ? overrideStyle : null),
          }}
          className={styles.modalContent}
        >
          {!enableThemeToggle && (
            <ThemeToggleBtn
              handleThemeToggle={handleThemeToggle}
              isDarkMode={isDark}
            />
          )}
          <MdOutlineClose
            className={styles.closeIcon}
            style={{ fontSize: closeIconSize }}
            onClick={toggleHandler}
            data-cy="modal-close"
          />
          <div
            style={{
              position: "absolute",
              top: `calc(${closeIconSize} + 1rem)`,
              width: "100%",
              height: `calc(90% - 2rem)`,
            }}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
export default memo(Modal);
