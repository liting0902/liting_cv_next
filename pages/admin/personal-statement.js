import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UpdatePS from "../../container/admin/updatePS.js";

export default function () {
	return (
		<React.Fragment>
			<UpdatePS />
		</React.Fragment>
	);
}
export async function getServerSideProps({ locale }) {
	return {
		props: await serverSideTranslations(locale, ["common"]),
	};
}
