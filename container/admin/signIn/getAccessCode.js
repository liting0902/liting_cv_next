import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "../../../contexts/language.context.js";
import { getOTP } from "../../../pages/api/adminAuthentication.js";
import { RiShieldKeyholeFill } from "react-icons/ri";
import styles from "../admin.module.css";

export default function ({ t, setIsOTPSent }) {
	const [showTooltip, setShowTooltip] = useState(false);
	const [sendingOTP, setSendingOTP] = useState(false);
	const route = useRouter();
	const language = useContext(LanguageContext);
	const iptRef = useRef();

	useEffect(() => {}, []);
	const submitGetAccessHandler = (e) => {
		e.preventDefault();
		const iptPhone = iptRef.current.value;
		if (iptPhone.startsWith("0") && iptPhone.length === 10) {
			iptPhone = `+886${iptPhone.slice(1)}`;
			getOTP(iptPhone, "recaptcha-container", language)
				.then((res) => {
					setSendingOTP(true);
					const otpSentTimeout = setTimeout(
						() => setIsOTPSent(true),
						2800
					);
					if (res) otpSentTimeout;
				})
				.catch((error) => {
					route.reload();
					alert(error);
				});
		} else {
			setShowTooltip(true);
			const showTooltipTimeout = setTimeout(
				() => setShowTooltip(false),
				1200
			);
		}
	};
	if (sendingOTP) {
		return <h4>{t("You will receive OTP by phone.")}</h4>;
	}
	return (
		<form onSubmit={submitGetAccessHandler}>
			<div
				style={{
					opacity: `${showTooltip ? 1 : 0}`,
					background: "rgb(0,0,0,0.5)",
					color: "orange",
					fontWeight: "bolder",
					transition: "all 2s",
					padding: ".6em",
					width: "auto",
					position: "absolute",
					left: "50%",
				}}>
				{t("Format incorrect")}.
			</div>
			<input
				className={styles.inputAdmin}
				type="text"
				ref={iptRef}
				placeholder={t("Mobile Number")}
				maxLength={10}
			/>
			<button className={styles.btnAdmin}>
				<RiShieldKeyholeFill
					style={{
						width: "2rem",
						fontSize: "1.6rem",
						marginRight: ".4rem",
					}}
				/>
				{t("Get access code")}
			</button>
		</form>
	);
}
