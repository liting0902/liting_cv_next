import fs from "fs/promises";
export default async (path, data) => {
	if (!data) return;
	await fs.writeFile(path, JSON.stringify(data), (err) => console.log(err));
};
