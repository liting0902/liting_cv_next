import React, { useContext, memo } from "react";
import CardLayout from "../../../components/layouts/CardLayout.js";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import BtnLayout from "../../../components/layouts/BtnLayout.js";
import {
  UpdateExperienceDataContext,
  UpdateExperienceDataDispatchContext,
} from "../../../contexts/updateExperienceData.context.js";
import { LanguageContext } from "../../../contexts/language.context.js";
import { updateExperience } from "../../../pages/api/experienceData.js";
import styles from "../admin.module.css";
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
  const language = useContext(LanguageContext);
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
    const res = await updateExperience(newData, language);
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
      <div
        className={styles.experiencePreview}
        // style={{
        //   //   display: "flex",
        //   //   flexDirection: "column",
        //   //   justifyContent: "center",
        //   width: "80%",
        //   height: "70%",
        //   minHeight: "10rem",
        //   fontSize: "1.em",
        //   border: "white 1px solid",
        //   padding: "1em",
        //   margin: ".8rem",
        //   boxSizing: "border-box",
        //   background: "black",
        //   lineHeight: "1.3em",
        //   overflow: "auto",
        // }}
      >
        <li style={{ listStyle: "none" }}>
          {t("Duration")}: {startDate} {t("to")} {endDate}
        </li>
        <li style={{ listStyle: "none" }}>
          {t("Company/School")}: {schoolCompanyName}
        </li>
        <li style={{ listStyle: "none" }}>
          {t("Job title/Faculty")}: {facultyJob}
        </li>
        <li style={{ listStyle: "none" }}>
          {t("Job description/Degree")}: {degreeWork}
        </li>
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
          <MdEdit style={{ color: "yellow" }} onClick={openEditModal} />
        </BtnLayout>
        <BtnLayout>
          <MdDeleteForever
            style={{ color: "deeppink" }}
            onClick={deleteHandler}
          />
        </BtnLayout>
      </div>
    </CardLayout>
  );
}
export default memo(ExperienceCard);
