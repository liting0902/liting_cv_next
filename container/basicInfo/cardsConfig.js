import BasicInfo from "./BasicInfoCard.js";
import Skills from "./SkillsCard.js";
import PS from "./PsCard.js";
import Work from "./GitlinkCard.js";
import BasicInfoModal from "../modalDescription/basicInfoModal.js";
import SkillsModal from "../modalDescription/skillsModal.js";
import PSModal from "../modalDescription/psModal.js";

export default [
	{
		title: "BasicInfo",
		cardComponent: () => <BasicInfo />,
		modalComponent: () => <BasicInfoModal />,
		enableModal: true,
	},
	{
		title: "Skills",
		cardComponent: () => <Skills />,
		modalComponent: () => <SkillsModal />,
		enableModal: true,
	},
	// {
	// 	title: "PS",
	// 	cardComponent: () => <PS />,
	// 	modalComponent: () => <PSModal />,
	// 	enableModal: true,
	// },
	{
		title: "Work",
		cardComponent: () => <Work />,
		modalComponent: () => null,
		enableModal: false,
	},
];
