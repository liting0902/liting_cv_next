import { skillList } from "../../data/skills/skillList.js";
import { doc, setDoc, getFirestore, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../lib/firebaseApp.js";

var db = getFirestore(firebaseApp);
async function updateSkillList() {
	const data = {
		...skillList,
		updateTime: Timestamp.fromDate(new Date()),
	};
	const res = await setDoc(doc(db, "skillList", "skillList"), data)
		.then((result) => {
			return true;
		})
		.catch((err) => {
			console.log("error", err);
		});
	console.log(`save result:::::`, res);
	return { saveResult: res };
}
export { updateSkillList };
