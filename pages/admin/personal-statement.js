import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UpdatePS from "../../container/admin/updatePS.js";
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
			<UpdatePS />
		</React.Fragment>
	);
}
export async function getServerSideProps({ locale }) {
	return {
		props: await serverSideTranslations(locale, ["common"]),
	};
}
