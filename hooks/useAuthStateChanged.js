import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export function useAuthStateChanged() {
	const auth = getAuth();
	const [authUser, setAuthUser] = useState();

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				const uid = JSON.stringify(user["uid"]);
				const expirationTime =
					user["stsTokenManager"]["expirationTime"];
				const idToken = await user.getIdToken().then((token) => {
					return token;
				});
				user && setAuthUser({ uid, expirationTime, idToken });
			}
		});
	}, []);

	return authUser;
}
