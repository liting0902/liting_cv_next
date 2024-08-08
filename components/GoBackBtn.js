import React, { useContext, useEffect, useState } from "react";
import BtnLayout from "@/components/layouts/BtnLayout.js";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function GoBackBtn() {
  const [hideBtn, setHideBtn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (window.history.length === 1) {
      setHideBtn(true);
    }
  }, []);
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  if (hideBtn) {
    return null;
  }
  return (
    <div
      style={{
        marginTop: ".6rem",
        position: "absolute",
      }}
    >
      <BtnLayout>
        <span className="aBackBtn" onClick={handleBack}>
          <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
        </span>
        <style jsx>{`
          .aBackBtn {
            color: rgba(255, 255, 255);
            text-decoration: none;
          }
          .aBackBtn:hover {
            color: black;
            font-weight: bolder;
            transition: all 0.5s ease-in;
          }
        `}</style>
      </BtnLayout>
    </div>
  );
}
