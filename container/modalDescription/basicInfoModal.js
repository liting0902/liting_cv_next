import React, { useState, useContext, useEffect } from "react";
import StyledList from "../../components/layouts/AnimationList.js";
import { FaReact } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaReadme, FaRegCopy } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { ThemeToggle } from "../../contexts/theme.context.js";
import { withTranslation } from "next-i18next";
function basicInfo({ t }) {
	const [isCopied, setIsCopied] = useState(false);
	const isDark = useContext(ThemeToggle);
	const tootipTimeout = setTimeout(() => {
		setIsCopied(false);
	}, 3200);
	const stopTootipTimeout = () => clearTimeout(tootipTimeout);
	useEffect(() => {
		return () => {
			stopTootipTimeout();
		};
	}, []);
	const iconStyle = {
		display: "block",
		marginRight: "1rem",
		fontSize: "2rem",
		minWidth: "32px",
	};

	const handleCopy = function () {
		const myEmail = "liting0902@gmail.com";
		navigator.clipboard.writeText(myEmail).then(() => {
			setIsCopied(true);
			tootipTimeout;
		});
	};
	return (
		<React.Fragment>
			<div className="skillsModalContainer">
				<ul
					style={{
						width: "100%",
					}}>
					<StyledList isDarkMode={isDark} index={1}>
						<FaReact style={iconStyle} />
						{t("React frontend engineer")}
					</StyledList>

					<StyledList isDarkMode={isDark} index={2}>
						<FaReadme style={iconStyle} />
						{t("Eager to learn")}
					</StyledList>
					<StyledList isDarkMode={isDark} index={3}>
						<GiHiking style={iconStyle} />
						{t("Able to take challenge")}
					</StyledList>
					<StyledList isDarkMode={isDark} index={4}>
						<SiMinutemailer style={iconStyle} />
						<div onClick={handleCopy}>
							{t("Contact me via email")}:
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									flexWrap: "wrap",
									zIndex: "3",
								}}>
								<div>liting0902</div>
								<div>
									@gmail.com ({t("Copy to clipboard")}
									<FaRegCopy />)
								</div>
							</div>
						</div>
					</StyledList>
				</ul>
				<div
					style={{
						opacity: `${isCopied ? 1 : 0}`,
						background: `${
							isDark ? "rgb(255,255,255,0.5)" : "black"
						}`,
						transition: "all 2s",
						padding: ".8em",
						boxShadow: `inset 0 0 5px 5px ${
							isDark ? "black" : "white"
						}`,
					}}>
					{t("Email copied")}.
				</div>
			</div>
			<style jsx>{`
				.skillsModalContainer {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 70%;
					height: 100%;
					margin: 0 auto;
				}
			`}</style>
		</React.Fragment>
	);
}
export default withTranslation("basicInfoModal")(basicInfo);
