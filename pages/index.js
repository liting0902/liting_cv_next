import React from "react";
import BasicInfoCards from "../container/basicInfo";
import Head from "next/head";
import getFetch from "../lib/getFetch";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import formatDbData from "../lib/formatDbData.js";
import path from "path";
import writeJSONFile from "../lib/writeFile.js";
import firebaseAPIParser from "../lib/firebaseAPIParser.js";

function Index(props) {
	return (
		<React.Fragment>
			<Head>
				<title>LiTing</title>
				<meta name="LiTing's CV" content="LiTing Personal Website" />
			</Head>
			<BasicInfoCards />
		</React.Fragment>
	);
}

export async function getStaticProps({ locale }) {
	const psDataPath = (lang) =>
		path.join(process.cwd(), "data", "pSData", `ps${lang}.json`);
	const skillsDataPath = () =>
		path.join(process.cwd(), "data", "skills", "skillList.json");

	const psDataZh = await getFetch(
		firebaseAPIParser("personal-statement", "zh")
	);
	const psDataEn = await getFetch(
		firebaseAPIParser("personal-statement", "en")
	);
	const skills = await getFetch(firebaseAPIParser("skillList", "skillList"));
	const skillList = skills.fields; //SEO

	await writeJSONFile(psDataPath("zh"), formatDbData(psDataZh.fields));
	await writeJSONFile(psDataPath("en"), formatDbData(psDataEn.fields));
	await writeJSONFile(skillsDataPath(), formatDbData(skillList));

	const translations = await serverSideTranslations(locale, [
		"common",
		"cards",
		"basicInfoModal",
		"skillsModal",
	]);
	return {
		props: {
			...translations,
			skillList,
			psDataZh,
			psDataEn,
		},
		revalidate: 10080, //a week
	};
}

export default Index;
