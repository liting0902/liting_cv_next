import React, { useState, useContext, useEffect } from "react";
import { getExperience } from "../../pages/api/experienceData.js";
import { LanguageContext } from "../../contexts/language.context.js";
import {
	UpdateExperienceDataContext,
	UpdateExperienceDataDispatchContext,
} from "../../contexts/updateExperienceData.context.js";
import CardsContainer from "../../components/layouts/CardsContainer.js";
import CardLayout from "../../components/layouts/CardLayout.js";
import { useRouter } from "next/router";
import { withTranslation } from "next-i18next";
import { MdOutlineNoteAdd } from "react-icons/md";
import GoBackBtn from "../../components/GoBackBtn.js";
import UpdateModal from "./updateExperience/updateModal.jsx";
import ExperienceCard from "./updateExperience/experienceCard.jsx";

function UpdatePS({ t }) {
	const language = useContext(LanguageContext);
	const [selectedId, setSelectedId] = useState(null);
	const [isAddNew, setIsAddNew] = useState(true);
	const experienceData = useContext(UpdateExperienceDataContext);
	const experienceDataDispatch = useContext(
		UpdateExperienceDataDispatchContext
	);

	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const openUpdateModalHandler = (e) => {
		setOpenUpdateModal((prevState) => !prevState);
	};
	const addNewModalHandler = (e) => {
		setIsAddNew(true);
		setOpenUpdateModal((prevState) => !prevState);
	};
	const route = useRouter();
	// useEffect(() => {
	// 	if (!user) {
	// 		route.push("/admin");
	// 	}
	// });
	useEffect(() => {
		const getData = async () => {
			const fetchedData = await getExperience(language);
			experienceDataDispatch({ type: "DATA", data: fetchedData });
		};
		getData();
	}, [experienceDataDispatch]);
	return (
		<React.Fragment>
			<GoBackBtn />
			{openUpdateModal ? (
				<UpdateModal
					toggleHandler={openUpdateModalHandler}
					selectedId={selectedId}
					isAddNew={isAddNew}
				/>
			) : (
				<CardsContainer
					overrideStyle={{
						alignContent: "flex-start",
						justifyContent: "flex-start",
					}}>
					{experienceData &&
						experienceData.map((rowData, i) => {
							return (
								<ExperienceCard
									key={i}
									rowData={rowData}
									index={i}
									openUpdateModalHandler={
										openUpdateModalHandler
									}
									setSelectedId={setSelectedId}
									setIsAddNew={setIsAddNew}
									t={t}
								/>
							);
						})}
					<CardLayout>
						<a onClick={addNewModalHandler}>
							<MdOutlineNoteAdd
								style={{ fontSize: "5rem", cursor: "pointer" }}
							/>
						</a>
					</CardLayout>
				</CardsContainer>
			)}
		</React.Fragment>
	);
}

export default withTranslation("common")(UpdatePS);
