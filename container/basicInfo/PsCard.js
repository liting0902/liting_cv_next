import React from "react";
import styles from "./cards.module.css";
import { BsPersonBoundingBox } from "react-icons/bs";
import { withTranslation } from "next-i18next";
function PersonalStatement({ t }) {
	return (
		<React.Fragment>
			<div className={styles.divBox}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						margin: ".5rem",
					}}>
					<BsPersonBoundingBox style={{ fontSize: "2rem" }} />
					<div style={{ fontSize: "1.4rem" }}>{t("About me")}</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default withTranslation("cards")(PersonalStatement);
