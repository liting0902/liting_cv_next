"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  updatePersonalStatement,
  getPersonalStatement,
} from "@/lib/api/personalStatementData.js";
import { withTranslation } from "next-i18next";
import GoBackBtn from "@/components/GoBackBtn.js";
import styles from "./admin.module.css";
import useLocale from "@/hooks/useLocale";
function UpdatePS({ t }) {
  const { locale } = useLocale();
  const [PSContent, setPSContent] = useState("");
  const psInputRef = useRef();

  const getPSContent = async () => {
    const res = await getPersonalStatement(locale);
    setPSContent(res.content.replace(/\"||\'/g, ""));
    // psInputRef.current.value = PSContent;
  };

  useEffect(() => {
    getPSContent();
  }, [locale]);
  const submitPSHandler = async (event) => {
    event.preventDefault();
    const psContent = psInputRef.current.value;
    const res = await updatePersonalStatement(psContent, locale);
    if (res.saveResult) {
      alert("Saved successfully");
    }
  };
  return (
    <React.Fragment>
      <GoBackBtn />
      <form onSubmit={submitPSHandler}>
        <textarea
          ref={psInputRef}
          style={{
            // whiteSpace: "pre-line",
            background: "rgb(0,0,0,0.8)",
            color: "white",
            fontSize: "1.2rem",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            width: "80vw",
            height: "70vh",
            margin: "1rem auto",
            display: "block",
            padding: "1rem",
          }}
          defaultValue={PSContent || ""}
          rows="5"
          cols="33"
        />
        <input
          className={styles.btnAdmin}
          type="submit"
          value={t("Confirm and update")}
        />
      </form>
    </React.Fragment>
  );
}

export default withTranslation("common")(UpdatePS);
