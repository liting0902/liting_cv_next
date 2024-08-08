'use client'
import React, { useRef, useContext, useEffect } from "react";
import Modal from "@/components/layouts/Modal.js";
import { updateExperience } from "@/lib/api/experienceData.js";
import styles from "../admin.module.css";
import { withTranslation } from "next-i18next";
import useLocale from "@/hooks/useLocale.js";
import {
  UpdateExperienceDataContext,
  UpdateExperienceDataDispatchContext,
} from "@/contexts/updateExperienceData.context.js";
import {ThemeToggle} from '@/contexts/theme.context.js'
import Label from "@/components/layouts/Label.js";
function UpdateModal({ t, toggleHandler, selectedId, isAddNew }) {

  const {locale} = useLocale()
  const experienceData = useContext(UpdateExperienceDataContext);
  const experienceDataDispatch = useContext(
    UpdateExperienceDataDispatchContext
  );
  const isDark = useContext(ThemeToggle)
  const startDateRef = useRef();
  const endDateRef = useRef();
  const schoolCompanyNameRef = useRef();
  const facultyJobRef = useRef();
  const degreeWorkRef = useRef();
  useEffect(() => {
    if (!isAddNew) {
      startDateRef.current.value = experienceData[selectedId].startDate;
      endDateRef.current.value = experienceData[selectedId].endDate;
      schoolCompanyNameRef.current.value =
        experienceData[selectedId].schoolCompanyName;
      facultyJobRef.current.value = experienceData[selectedId].facultyJob;
      degreeWorkRef.current.value = experienceData[selectedId].degreeWork;
    }
  }, []);
  const handleSave = async (event) => {
    event.preventDefault();
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    const schoolCompanyName = schoolCompanyNameRef.current.value;
    const facultyJob = facultyJobRef.current.value;
    const degreeWork = degreeWorkRef.current.value;
    const newData = {
      startDate,
      endDate,
      schoolCompanyName,
      facultyJob,
      degreeWork,
    };
    if (!isAddNew) experienceData.splice(selectedId, 1, newData);
    const setData = !isAddNew ? experienceData : [...experienceData, newData];
    const res = await updateExperience(setData, locale);

    experienceDataDispatch({ type: "DATA", data: setData });
    if (res) {
      alert("Update successfully");
      toggleHandler(false);
    }
  };

  return (
    <Modal toggleHandler={toggleHandler} enableThemeToggle={true}>
      <form onSubmit={handleSave} className={styles.formExperience} style={{color:`${isDark?"white":'black'}`}}>
        <Label htmlFor="start-date">
          {t("From")}:
        </Label>
        <input
          ref={startDateRef}
          type="date"
          id="start-date"
          name="start-date"
          className={styles.datePciker}
          // required
        />
        <Label htmlFor="end-date">
          {t("End")}:
        </Label>
        <input
          ref={endDateRef}
          type="date"
          id="end-date"
          name="end-date"
          className={styles.datePciker}
        />
        <Label htmlFor="unit">
          {t("Company/School")}:
        </Label>
        <input
          type="text"
          ref={schoolCompanyNameRef}
          id="unit"
          className={styles.inputExperience}
        />
        <Label htmlFor="title-faculty">
          {t("Job title/Faculty")}:
        </Label>
        <input
          type="text"
          ref={facultyJobRef}
          id="title-faculty"
          className={styles.inputExperience}
        />
        <Label htmlFor="work-degree">
          {t("Job description/Degree")}:
        </Label>
        <textarea
          type="text"
          ref={degreeWorkRef}
          id="work-degree"
          className={styles.inputExperience}
          style={{minHeight:'5em'}}
        />
        <input
          className={styles.btnAdmin}
          style={{marginLeft:'70%'}}
          type="submit"
          value={t("Confirm and update")}
        />
      </form>
    </Modal>
  );
}

export default withTranslation("common")(UpdateModal);
