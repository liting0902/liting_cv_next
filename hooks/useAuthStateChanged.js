import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export function useAuthStateChanged() {
  const auth = getAuth();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const expirationTime = user["stsTokenManager"]["expirationTime"];
        const idToken = await user.getIdToken().then((token) => {
          return token;
        });
        user && setAuthUser({ expirationTime, idToken });
        sessionStorage.setItem("admin", idToken);
      }
    });
  }, []);

  return authUser;
}
