// Import the functions you need from the SDKs you need
import { firebaseApp } from "../../lib/firebaseApp.js";
import {
	getAuth,
	signInWithPhoneNumber,
	RecaptchaVerifier,
	signOut,
} from "firebase/auth";
firebaseApp;
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
	const testNumber = "+886911123123";
	const confirmation = await signInWithPhoneNumber(
		auth,
		phoneNumber,
		recaptchaVerifier
	);
	confirmationResult = confirmation;
	console.log(`send out verification code:::::`, confirmation);
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
		if (resultJSON["user"]["uid"]) {
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
	await auth.onAuthStateChanged((user) => {
		if (user) {
			const uid = user.uid;
			const expirationTime = user["stsTokenManager"]["expirationTime"];
			authUserInfo = { uid, expirationTime };
			window.sessionStorage.setItem("admin", authUserInfo);
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
