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
    overrideStyle: { width: "50vw" },
  },
  {
    title: "Technical Skills",
    cardComponent: () => <Skills />,
    modalComponent: (props) => <SkillsModal {...props} />,
    enableModal: true,
    overrideStyle: { maxWidth: "66vw" },
  },
  {
    title: "PS",
    cardComponent: () => <PS />,
    modalComponent: (props) => <PSModal {...props} />,
    enableModal: true,
    overrideStyle: { maxWidth: "90vw", height: "90vh" },
  },
  {
    title: "Work",
    cardComponent: () => <Work />,
    modalComponent: () => null,
    enableModal: false,
  },
];
