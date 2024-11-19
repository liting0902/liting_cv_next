"use client";
import React, { useState, memo } from "react";
import useLocale from "@/hooks/useLocale";
import Link from "next/link";
import { MdOutlineGTranslate, MdClose } from "react-icons/md";
import { withTranslation } from "next-i18next";
import BtnLayout from "@/components/layouts/BtnLayout.js";

import "./locale.css";
import { usePathname, useRouter } from "next/navigation";
function LocaleButton({ t }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useLocale();
  const extractPathname = pathname
    .split("/")
    .filter((ele, i) => {
      if (ele !== "" && ele !== "zh") return ele;
    })
    .join("/");

  const handleOpenPopover = (event) => {
    event.preventDefault();
    setOpen((prev) => !prev);
  };
  const langToggle = (lang) => (evt) => {
    if (lang === locale) return null;
    router.push(`/${lang}/${extractPathname}`);
    handleOpenPopover(evt);
  };
  return (
    <React.Fragment>
      <BtnLayout>
        <div onClick={handleOpenPopover} data-cy="locale-btn">
          {open ? (
            <span data-cy="locale-close">
              <MdClose />
            </span>
          ) : (
            <span data-cy="locale-open">
              <MdOutlineGTranslate />
            </span>
          )}
        </div>
      </BtnLayout>
      <div
        className="popover"
        data-cy="locale-menu"
        style={{
          opacity: `${open ? 1 : 0}`,
          pointerEvents: `${open ? "auto" : "none"}`,
        }}
      >
        <span
          data-cy="locale-en"
          style={{ broderRadius: "5px 5px 0 0" }}
          className={`langMenu en ${locale === "en" ? "activeLang" : ""}`}
          onClick={langToggle("en")}
        >
          {t("En")}
        </span>
        <span
          data-cy="locale-zh"
          style={{ broderRadius: "5px 5px 0 0" }}
          className={`langMenu zh ${locale === "zh" ? "activeLang" : ""}`}
          onClick={langToggle("zh")}
        >
          {t("Zh")}
        </span>
      </div>
    </React.Fragment>
  );
}
export default memo(withTranslation("common")(LocaleButton));
