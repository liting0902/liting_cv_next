'use client'
import React, { useContext, memo } from "react";
import CardLayout from "@/components/layouts/CardLayout.js";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import BtnLayout from "@/components/layouts/BtnLayout.js";
import {
  UpdateExperienceDataContext,
  UpdateExperienceDataDispatchContext,
} from "@/contexts/updateExperienceData.context.js";
import { updateExperience } from "@/lib/api/experienceData.js";
import styles from "../admin.module.css";
import useLocale from "@/hooks/useLocale";
function ExperienceCard({
  rowData,
  index,
  t,
  openUpdateModalHandler,
  setSelectedId,
  setIsAddNew,
}) {
  const { startDate, endDate, schoolCompanyName, facultyJob, degreeWork } =
    rowData;
    const { locale } = useLocale();
  const experienceData = useContext(UpdateExperienceDataContext);
  const experienceDataDispatch = useContext(
    UpdateExperienceDataDispatchContext
  );
  const openEditModal = (event) => {
    event.preventDefault();
    setSelectedId(index);
    setIsAddNew(false);
    openUpdateModalHandler(true);
  };
  const deleteHandler = async (event) => {
    event.preventDefault();
    const newData = experienceData.filter(
      (item) => item.startDate !== experienceData[index].startDate
    );
    const res = await updateExperience(newData, locale);
    if (res) {
      alert(
        `delete ${experienceData[index]["schoolCompanyName"]}- ${experienceData[index]["facultyJob"]}  successfully`
      );
    }
    experienceDataDispatch({ type: "DATA", data: newData });
  };
  return (
    <CardLayout
      overrideStyle={{
        height: "auto",
        flexDirection: "column",
        padding: "1em",
      }}
    >
      <div className={styles.experiencePreview}>
        <li >
          <span className={styles.liTitle}>{t("Duration")}</span>:<span> {startDate} {t("to")} {endDate}</span>
        </li>
        <li >
          <span className={styles.liTitle}>{t("Company/School")}</span>: <span>{schoolCompanyName}</span>
        </li>
        <li >
          <span className={styles.liTitle}>{t("Job title/Faculty")}</span>: <span>{facultyJob}</span>
        </li>
        {/* <li >
          <span className={styles.liTitle}>{t("Job description/Degree")}</span>: <span>{degreeWork}</span>
        </li> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <BtnLayout>
          <MdEdit style={{ color: "lightgrey" }} onClick={openEditModal} />
        </BtnLayout>
        <BtnLayout>
          <MdDeleteForever
            style={{ color: "rgb(198, 97, 97)" }}
            onClick={deleteHandler}
          />
        </BtnLayout>
      </div>
    </CardLayout>
  );
}
export default memo(ExperienceCard);
