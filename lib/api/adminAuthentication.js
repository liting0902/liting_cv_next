// Import the functions you need from the SDKs you need
import firebaseApp from "@/lib/firebaseApp.js";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signOut,
} from "firebase/auth";

const auth = getAuth();

let confirmationResult;
const getOTP = async (phoneNumber, elementId, language) => {
  auth.languageCode = language;
  const recaptchaVerifier = new RecaptchaVerifier(
    `${elementId}`,
    {
      size: "invisible",
    },
    auth
  );

  const confirmation = await signInWithPhoneNumber(
    auth,
    phoneNumber,
    recaptchaVerifier
  ).then((res) => {
    return res;
  });
  confirmationResult = confirmation;

  return confirmationResult;
};
const verifyConfirmation = async (code) => {
  if (!!confirmationResult) {
    let result;
    try {
      result = await confirmationResult.confirm(code);
    } catch (err) {}
    const objString = JSON.stringify(result);
    const resultJSON = JSON.parse(objString);
    if (resultJSON["user"]) {
      console.log("verified");
      return true;
    } else {
      window.sessionStorage.removeItem("admin");
      return "visitor";
    }
  }
};
const onAuthChanged = async () => {
  let authUserInfo;
  await auth.onAuthStateChanged(async (user) => {
    if (user) {
      const expirationTime = user["stsTokenManager"]["expirationTime"];
      const idToken = await user.getIdToken().then((token) => {
        return token;
      });
      authUserInfo = { expirationTime, idToken };

      window.sessionStorage.setItem("admin", idToken);
    }
  });
  return authUserInfo;
};
const logOut = () => {
  return signOut(auth)
    .then(() => {
      window.sessionStorage.removeItem("admin");
      return " Sign-out successful";
    })
    .catch((error) => {
      // An error happened.
    });
};

export { getOTP, verifyConfirmation, onAuthChanged, logOut };
