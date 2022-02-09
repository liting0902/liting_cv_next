import React, { useRef, useContext, useEffect } from "react";
import Modal from "../../../components/Modal.js";
import { updateExperience } from "../../../pages/api/experienceData.js";
import styles from "../admin.module.css";
import { withTranslation } from "next-i18next";
import { LanguageContext } from "../../../contexts/language.context.js";
import {
	UpdateExperienceDataContext,
	UpdateExperienceDataDispatchContext,
} from "../../../contexts/updateExperienceData.context.js";
function UpdateModal({ t, toggleHandler, selectedId, isAddNew }) {
	const language = useContext(LanguageContext);
	const experienceData = useContext(UpdateExperienceDataContext);
	const experienceDataDispatch = useContext(
		UpdateExperienceDataDispatchContext
	);
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
		const setData = !isAddNew
			? experienceData
			: [...experienceData, newData];
		const res = await updateExperience(setData, language);
		experienceDataDispatch({ type: "DATA", data: setData });
		if (res) {
			alert("Update successfully");
			toggleHandler(false);
		}
	};
	console.log("isAddNew", isAddNew);
	return (
		<Modal toggleHandler={toggleHandler} enableThemeToggle={false}>
			<form onSubmit={handleSave} className={styles.formExperience}>
				<label htmlFor="start-date" className={styles.labelStyle}>
					From:
				</label>
				<input
					ref={startDateRef}
					type="date"
					id="start-date"
					name="start-date"
					className={styles.datePciker}
					// required
				/>
				<label htmlFor="end-date" className={styles.labelStyle}>
					End:
				</label>
				<input
					ref={endDateRef}
					type="date"
					id="end-date"
					name="end-date"
					className={styles.datePciker}
				/>
				<label htmlFor="unit" className={styles.labelStyle}>
					Unit:
				</label>
				<input
					type="text"
					ref={schoolCompanyNameRef}
					id="unit"
					className={styles.inputExperience}
				/>
				<label htmlFor="title-faculty" className={styles.labelStyle}>
					Title/Faculty:
				</label>
				<input
					type="text"
					ref={facultyJobRef}
					id="title-faculty"
					className={styles.inputExperience}
				/>
				<label htmlFor="work-degree" className={styles.labelStyle}>
					Work/Degree:
				</label>
				<textarea
					type="text"
					ref={degreeWorkRef}
					id="work-degree"
					className={styles.inputExperience}
				/>
				<input
					className={styles.btnAdmin}
					type="submit"
					value={t("Confirm and update")}
				/>
			</form>
		</Modal>
	);
}

export default withTranslation("common")(UpdateModal);
