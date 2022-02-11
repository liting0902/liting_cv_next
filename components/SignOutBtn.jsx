import React, { useContext, useEffect, useState } from "react";
import { logOut } from "../pages/api/adminAuthentication.js";
import BtnLayout from "../components/layouts/BtnLayout.js";
import { MdLogout } from "react-icons/md";
import { AuthContext, AuthDispatchContext } from "../contexts/auth.context";
export default function () {
	const authInfo = useContext(AuthContext);
	const authDispatch = useContext(AuthDispatchContext);
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		if (!!window && window.sessionStorage.getItem("admin")) {
			setIsAuth(true);
		}
	});
	const handleLogout = async (event) => {
		event.preventDefault();
		const result = await logOut();
		if (result) {
			window.logoutTimeout = null;
			authDispatch({
				type: "AUTHORIZATION",
				authInfo: { expirationTime: null, idToken: null },
			});
		}
	};
	return (
		<div
			style={{
				display: `${
					isAuth || (!!authInfo && !!authInfo.idToken)
						? "block"
						: "none"
				}`,
				marginTop: ".6rem",
			}}>
			<BtnLayout>
				<MdLogout onClick={handleLogout}></MdLogout>
			</BtnLayout>
		</div>
	);
}
