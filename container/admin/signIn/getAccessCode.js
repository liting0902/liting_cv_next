"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getOTP } from "@/lib/api/adminAuthentication.js";
import { RiShieldKeyholeFill } from "react-icons/ri";
import styles from "../admin.module.css";
import useLocale from "@/hooks/useLocale";

export default function getAccessCode({ t, setIsOTPSent }) {
  const { locale } = useLocale();
  const [showTooltip, setShowTooltip] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const router = useRouter();
  const iptRef = useRef();
  let showTooltipTimeout;
  useEffect(() => {
    return () => {
      clearTimeout(showTooltipTimeout);
    };
  }, []);
  const submitGetAccessHandler = (e) => {
    e.preventDefault();
    let iptPhone = iptRef.current.value;
    if (iptPhone.startsWith("0") && iptPhone.length === 10) {
      iptPhone = `+886${iptPhone.slice(1)}`;

      getOTP(iptPhone, "recaptcha-container", locale)
        .then((res) => {
          setSendingOTP(true);
          const otpSentTimeout = setTimeout(() => setIsOTPSent(true), 2800);
          if (res) otpSentTimeout;
          router.prefetch(`en/admin`);
        })
        .catch((error) => {
          // route.reload();
          router.refresh();
          alert(error);
        });
    } else {
      setShowTooltip(true);
      showTooltipTimeout = setTimeout(() => setShowTooltip(false), 1200);
    }
  };
  if (sendingOTP) {
    return (
      <h4 className="textLoading">{t("You will receive OTP by phone.")}</h4>
    );
  } else
    return (
      <form>
        <div
          style={{
            opacity: `${showTooltip ? 1 : 0}`,
            background: "rgb(0,0,0,0.5)",
            color: "orange",
            fontWeight: "bolder",
            padding: ".6em",
            width: "auto",
            position: "absolute",
            left: "50%",
          }}
        >
          {t("Format incorrect")}.
        </div>
        <input
          className={styles.inputAdmin}
          type="text"
          ref={iptRef}
          placeholder={t("Mobile Number")}
          maxLength={10}
        />
        <div className={styles.btnAdmin} onClick={submitGetAccessHandler}>
          <div className={styles.btnAdminIcon}>
            <RiShieldKeyholeFill />
          </div>
          <div className={styles.btnAdminText}>{t("Get access code")}</div>
        </div>
      </form>
    );
}
