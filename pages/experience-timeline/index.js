import React, { useContext, useEffect } from "react";
import TimelineIndex from "../../container/experienceTimeline/TimelineIndex.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import firebaseAPIParser from "../../lib/firebaseAPIParser.js";
import getFetch from "../../lib/getFetch.js";
import formatDbData from "../../lib/formatDbData.js";
import { SetExperienceDispatchContext } from "../../contexts/setExperience.context.js";

function Experience(props) {
	const setExperienceDispatch = useContext(SetExperienceDispatchContext);
	const { historyData } = props;
	useEffect(() => {
		const action = {
			type: "DATA",
			data: historyData,
		};
		setExperienceDispatch(action);
	}, []);
	return (
		<React.Fragment>
			<TimelineIndex />
		</React.Fragment>
	);
}

export async function getStaticProps({ locale }) {
	const fetchExperience = await getFetch(
		firebaseAPIParser("experience", locale)
	);
	const data = formatDbData(fetchExperience.fields);
	const historyData = data.historyData.values.map((item) =>
		formatDbData(item.mapValue.fields)
	);
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			historyData,
			revalidate: 10080,
		},
	};
}

export default Experience;
