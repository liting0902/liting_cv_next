import React, { useContext, useEffect, useState } from "react";
import { logOut } from "../pages/api/adminAuthentication.js";
import BtnLayout from "../components/layouts/BtnLayout.js";
import { MdLogout } from "react-icons/md";
import { AuthContext, AuthDispatchContext } from "../contexts/auth.context";
import Router, { useRouter } from "next/router";
import { useAuthStateChanged } from "../hooks/useAuthStateChanged.js";
export default function () {
	const authInfo = useContext(AuthContext);
	const authDispatch = useContext(AuthDispatchContext);

	const route = useRouter();
	const authUser = useAuthStateChanged();
	const handleLogout = async (event) => {
		event.preventDefault();
		const res = await logOut();

		if (res) {
			authDispatch({
				type: "AUTHORIZATION",
				authInfo: { uid: null, expirationTime: null, idToken: null },
			});
		}
	};
	return (
		<div
			style={{
				display: `${
					!!authUser && authUser.uid !== null ? "block" : "none"
				}`,
				marginTop: ".6rem",
			}}>
			<BtnLayout>
				<MdLogout onClick={handleLogout}></MdLogout>
			</BtnLayout>
		</div>
	);
}
