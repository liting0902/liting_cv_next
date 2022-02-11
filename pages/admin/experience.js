import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UpdateExperience from "../../container/admin/updateExperience.js";

export default function () {
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
