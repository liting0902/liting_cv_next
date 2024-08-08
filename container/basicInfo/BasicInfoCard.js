import React from "react";
import styles from "./cards.module.css";
import { withTranslation } from "next-i18next";
import { FaReact } from "react-icons/fa";
function PersonalInfo({ t }) {
  return (
    <React.Fragment>
      <div className={styles.divBox}>
        <div className={styles.divInfoText}>
          <FaReact
            style={{
              marginRight: "0.4rem",
              fontSize: "1.8rem",
            }}
          />
          <div
            style={{
              textAlign: "center",
            }}
          >
            {t("Frontend Engineer")}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withTranslation("cards")(PersonalInfo);
