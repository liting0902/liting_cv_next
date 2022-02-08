import React from "react";
import Admin from "../../container/admin/index.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function () {
	return <Admin />;
}
export async function getServerSideProps({ locale }) {
	return {
		props: await serverSideTranslations(locale, ["common"]),
	};
}
