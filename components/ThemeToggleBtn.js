import React from "react";
import { FaSun, FaRegMoon } from "react-icons/fa";
import { withTranslation } from "react-i18next";

const ThemeToggleBtn = function ({ t, handleThemeToggle, isDarkMode }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "flex-start",
				color: "grey",
			}}
			onClick={handleThemeToggle}>
			{isDarkMode ? (
				<>
					<FaSun
						style={{
							display: "inline",
							margin: "1rem",
							fontSize: "1.6rem",
						}}
					/>
					<div>{t("Turn off night mode")}</div>
				</>
			) : (
				<>
					<FaRegMoon
						style={{
							display: "inline-block",
							margin: "1rem",
							fontSize: "1.6rem",
						}}
					/>
					<div>{t("Turn on night mode")}</div>
				</>
			)}
		</div>
	);
};
export default withTranslation("common")(ThemeToggleBtn);
