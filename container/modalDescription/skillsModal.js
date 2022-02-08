import React, { useState, useContext, useEffect } from "react";
import AnimationList from "../../components/layouts/AnimationList.js";
import { SiFurrynetwork } from "react-icons/si";
import { ThemeToggle } from "../../contexts/theme.context.js";
import { withTranslation } from "next-i18next";

function Skills({ t }) {
	const isDark = useContext(ThemeToggle);
	const [skills, setSkills] = useState();
	useEffect(() => {
		const getSkills = async () => {
			const skillList = await fetch("/api/skills")
				.then((res) => res.json())
				.then((res) => JSON.parse(res.data));

			const _skills = [
				{ "Key techniques": skillList["techniques"] },
				{ "State management": skillList["stateManagement"] },
				{ "Style sheet language": skillList["styleSheetLanguage"] },
				{ "Web API": skillList["db"] },
				{ "Version control": skillList["versionControl"] },
				{ "Working enviroment": skillList["os"] },
				{ "The others": skillList["others"] },
				{ "JS library": skillList["toolkit"] },
			];
			setSkills(_skills);
		};
		getSkills();
	}, []);

	if (!skills) {
		return <h1 style={{ color: "white" }}>Loading...</h1>;
	}
	return (
		<React.Fragment>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					width: "100%",
					maxWidth: "800px",
					height: "100%",
					margin: "0 auto",
				}}>
				<ul style={{ display: "block" }}>
					{skills &&
						skills.map((item, index) => {
							const titleKey = Object.keys(item)[0];
							return (
								<AnimationList
									isDarkMode={isDark}
									key={index}
									index={index}>
									<div>
										<SiFurrynetwork
											style={{
												fontSize: "1.3rem",
												marginRight: ".5rem",
											}}
										/>
									</div>
									<div
										style={{
											display: "inline-block",
										}}>
										{t(`${titleKey}`)}:{item[`${titleKey}`]}
									</div>
								</AnimationList>
							);
						})}
				</ul>
			</div>
		</React.Fragment>
	);
}

export default withTranslation("skillsModal")(Skills);
