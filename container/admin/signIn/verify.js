"use client";
import React, { useContext, useState, useEffect } from "react";
import {
  verifyConfirmation,
  onAuthChanged,
  logOut,
} from "@/lib/api/adminAuthentication.js";
import { AuthDispatchContext } from "@/contexts/auth.context.js";
import styles from "../admin.module.css";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
export default function verify({ t }) {
  const authDispatch = useContext(AuthDispatchContext);
  const router = useRouter();
  const [confirmCode, setConfirmCode] = useState("");
  const logoutTimeout = setTimeout(() => {
    logOut();
    router.push("/admin");
  }, 600000);
  const stopTootipTimeout = () => clearTimeout(logoutTimeout);
  useEffect(() => {
    return () => {
      stopTootipTimeout();
    };
  }, []);
  const handleInputCode = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setConfirmCode(value);
  };
  const handleConfirmation = async (code) => {
    const res = await verifyConfirmation(code);
    const currentUser = await onAuthChanged();

    window.logoutTimeout = logoutTimeout;
    authDispatch({
      type: "AUTHORIZATION",
      authInfo: currentUser,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <input
        className={styles.inputAdmin}
        type="text"
        onChange={handleInputCode}
        cy-data="phone-log-in"
      />
      <div
        className={styles.btnAdmin}
        onClick={() => handleConfirmation(confirmCode)}
        cy-data="get-otp"
      >
        <div className={styles.btnAdminIcon}>
          <RiShieldKeyholeFill />
        </div>
        <div className={styles.btnAdminText}>{t("Verify")}</div>
      </div>
    </div>
  );
}
