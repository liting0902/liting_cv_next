import React, { useContext, useEffect, useState } from "react";
import SignIn from "./signIn";
import UpdatePage from "./updatePage.js";
import {
	AuthContext,
	AuthDispatchContext,
} from "../../contexts/auth.context.js";
import { useAuthStateChanged } from "../../hooks/useAuthStateChanged.js";
export default function () {
	const authInfo = useContext(AuthContext);
	// const authDispatch = useContext(AuthDispatchContext);
	const user = useAuthStateChanged();
	const [isAuth, setIsAuth] = useState(false);

	return (
		<React.Fragment>{user ? <UpdatePage /> : <SignIn />}</React.Fragment>
	);
}
