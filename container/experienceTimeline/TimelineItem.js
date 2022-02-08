import React, { useContext } from "react";

import { LayoutGroup } from "framer-motion";
import TimelineDetails from "./TimelineDetails.js";
import { SetExperienceContext } from "../../contexts/setExperience.context.js";

export default function () {
	const experience = useContext(SetExperienceContext);
	return (
		<LayoutGroup>
			{!!experience &&
				experience.map((item, index) => {
					const {
						facultyJob,
						startDate,
						degreeWork,
						schoolCompanyName,
						endDate,
					} = item;
					const details = degreeWork.split("\n");
					const year = startDate.split("-")[0];
					return (
						<TimelineDetails
							key={index}
							index={index}
							year={year}
							title={schoolCompanyName}
							subtitle={facultyJob}
							details={details}
							duration={`${startDate} - ${endDate}`}
						/>
					);
				})}
		</LayoutGroup>
	);
}
