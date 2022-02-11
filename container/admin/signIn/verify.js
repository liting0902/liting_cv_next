import React, { useContext, useState, useEffect } from "react";
import {
	verifyConfirmation,
	onAuthChanged,
	logOut,
} from "../../../pages/api/adminAuthentication.js";
import { AuthDispatchContext } from "../../../contexts/auth.context.js";
import styles from "../admin.module.css";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { useRouter } from "next/router";
export default function ({ t }) {
	const authDispatch = useContext(AuthDispatchContext);
	const route = useRouter();
	const [confirmCode, setConfirmCode] = useState("");
	const logoutTimeout = setTimeout(() => {
		logOut();
		route.push("/admin");
	}, 600000);
	const stopTootipTimeout = () => clearTimeout(logoutTimeout);
	useEffect(() => {
		return () => {
			stopTootipTimeout();
		};
	}, []);
	const handleInputCode = (event) => {
		event.preventDefault();
		const { value } = event.target;
		setConfirmCode(value);
	};
	const handleConfirmation = async (code) => {
		const res = await verifyConfirmation(code);
		const currentUser = await onAuthChanged();

		window.logoutTimeout = logoutTimeout;
		authDispatch({
			type: "AUTHORIZATION",
			authInfo: currentUser,
		});
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end",
				justifyContent: "center",
			}}>
			<input
				className={styles.inputAdmin}
				type="text"
				onChange={handleInputCode}
			/>
			<button
				className={styles.btnAdmin}
				onClick={() => handleConfirmation(confirmCode)}>
				<RiShieldKeyholeFill
					style={{
						width: "2rem",
						fontSize: "1.6rem",
						marginRight: ".4rem",
					}}
				/>
				{t("Verify")}
			</button>
		</div>
	);
}
