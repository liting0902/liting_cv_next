import fs from "fs";
import path from "path";
export default async function (req, res) {
	const psDataPath = (lang) =>
		path.join(process.cwd(), "data", "pSData", `ps${lang}.json`);

	if (req.method === "GET") {
		const { locale } = req.query;
		const psData = fs.readFileSync(
			psDataPath(locale),
			"utf8",
			(error, data) => {
				if (error) {
					console.log("readFile Error ", error);
					return;
				}
			}
		);
		res.status(201).json({ data: psData });
	}
}
