import React, { useState, useEffect, useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UpdateExperience from "../../container/admin/updateExperience.js";
import { useRouter } from "next/router";
export default function () {
	const route = useRouter();
	useEffect(() => {
		if (!window.sessionStorage.getItem("admin")) {
			route.push("/admin");
		}
	}, []);
	return (
		<React.Fragment>
			<UpdateExperience />
		</React.Fragment>
	);
}
export async function getServerSideProps({ locale }) {
	return {
		props: await serverSideTranslations(locale, ["common"]),
	};
}
