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
      if (ele !== "" && ele !== "en") return ele;
    })
    .join("/");

  const handleOpenPopover = (event) => {
    event.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <BtnLayout>
        <div onClick={handleOpenPopover}>
          {open ? <MdClose /> : <MdOutlineGTranslate />}
        </div>
      </BtnLayout>
      <div
        className="popover"
        style={{
          opacity: `${open ? 1 : 0}`,
          pointerEvents: `${open ? "auto" : "none"}`,
        }}
      >
        <span
          // href={`/en/${extractPathname}`}
          className="langMenu"
          onClick={(evt) => {
            if (locale === "en") return null;
            router.push(`/en/${extractPathname}`);
            handleOpenPopover(evt);
          }}
        >
          {t("En")}
        </span>
        <span
          // href={}
          className="langMenu"
          onClick={(evt) => {
            if (locale === "zh") return null;
            router.push(`/zh/${extractPathname}`);
            handleOpenPopover(evt);
          }}
        >
          {t("Zh")}
        </span>
      </div>
    </React.Fragment>
  );
}
export default memo(withTranslation("common")(LocaleButton));
