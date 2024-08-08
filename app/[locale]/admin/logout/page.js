"use client";
import React, { useEffect } from "react";
// import initTranslations from "@/app/i18n";
import { withTranslation } from "next-i18next";
import { useRouter, useParams } from "next/navigation";

function Logout({ t }) {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const timer = setTimeout(() => router.push(`/${params.locale}`), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <h2
        className="textLoading"
        style={{ textAlign: "center", marginTop: "5em" }}
      >
        {t("Logged out successfully...")}
      </h2>
    </>
  );
}
export default withTranslation("common")(Logout);
