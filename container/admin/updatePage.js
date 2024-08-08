"use client";
import React, { useEffect } from "react";
import CardsContainer from "@/components/layouts/CardsContainer.js";
import CardLayout from "@/components/layouts/CardLayout.js";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import styles from "./admin.module.css";
function UpdatePage({ t }) {
  const router = useRouter();
  useEffect(() => {
    if (!window.sessionStorage.getItem("admin")) {
      router.push("/admin");
    }
  }, []);

  return (
    <React.Fragment>
      <CardsContainer>
        <CardLayout>
          <Link className={styles.adminLink} href="/admin/personal-statement">
            <span style={{ textAlign: "center" }}>
              <h2>{t("Personal Statement")}</h2>
            </span>
          </Link>
        </CardLayout>
        <CardLayout>
          <Link className={styles.adminLink} href="/admin/experience">
            <span style={{ textAlign: "center" }}>
              <h2>{t("Education Work Experience")}</h2>
            </span>
          </Link>
        </CardLayout>
      </CardsContainer>
    </React.Fragment>
  );
}
export default withTranslation("common")(UpdatePage);
