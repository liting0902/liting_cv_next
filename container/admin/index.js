import React, { useContext } from "react";
import SignIn from "./signIn";
import UpdatePage from "./updatePage.js";
import { AuthContext } from "../../contexts/auth.context.js";
import { useAuthStateChanged } from "../../hooks/useAuthStateChanged.js";
export default function ({ ...props }) {
	const authInfo = useContext(AuthContext);
	const authUser = useAuthStateChanged();
	return (
		<React.Fragment>
			{!!authUser && authUser.idToken !== null ? (
				<UpdatePage />
			) : (
				<SignIn />
			)}
		</React.Fragment>
	);
}
