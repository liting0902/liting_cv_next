import React, { useContext, useRef, useEffect } from "react";
import {
	updatePersonalStatement,
	getPersonalStatement,
} from "../../pages/api/personalStatementData.js";
import { LanguageContext } from "../../contexts/language.context.js";
import { withTranslation } from "next-i18next";
import GoBackBtn from "../../components/GoBackBtn.js";
import { useRouter } from "next/router";
import styles from "./admin.module.css";
function UpdatePS({ t }) {
	const language = useContext(LanguageContext);
	const psInputRef = useRef();
	const route = useRouter();
	const getPSContent = async () => {
		const res = await getPersonalStatement(language);
		const PSContent = res.content.replace(/\"||\'/g, "");
		psInputRef.current.value = `${PSContent}`;
	};
	useEffect(() => {
		// if (!user) {
		// 	route.push("/admin");
		// 	// alert("you are not logged in");
		// }
	});
	// console.log("user", user);
	useEffect(() => {
		getPSContent();
	}, []);
	const submitPSHandler = async (event) => {
		event.preventDefault();
		const psContent = psInputRef.current.value;
		const res = await updatePersonalStatement(psContent, language);
		if (res.saveResult) {
			alert("Saved successfully");
		}
	};
	return (
		<React.Fragment>
			<GoBackBtn />
			<form onSubmit={submitPSHandler}>
				<textarea
					ref={psInputRef}
					style={{
						// whiteSpace: "pre-line",
						background: "rgb(0,0,0,0.8)",
						color: "white",
						fontSize: "1.2rem",
						fontFamily:
							"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
						width: "80vw",
						height: "70vh",
						margin: "1rem auto",
						display: "block",
						padding: "1rem",
					}}
					rows="5"
					cols="33"
				/>
				<input
					className={styles.btnAdmin}
					type="submit"
					value={t("Confirm and update")}
				/>
			</form>
		</React.Fragment>
	);
}

export default withTranslation("common")(UpdatePS);
