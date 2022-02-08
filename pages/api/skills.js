import fs from "fs";
import path from "path";
export default async function (req, res) {
	const skillsDataPath = () =>
		path.join(process.cwd(), "data", "skills", `skillList.json`);

	if (req.method === "GET") {
		const skillsData = fs.readFileSync(
			skillsDataPath(),
			"utf8",
			(error, data) => {
				if (error) {
					console.log("readFile Error ", error);
					return;
				}
			}
		);
		res.status(201).json({ data: skillsData });
	}
}
