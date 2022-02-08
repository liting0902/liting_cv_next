import React, { memo, useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import ThemeToggleBtn from "./ThemeToggleBtn.js";
import {
	ThemeToggle,
	DispatchThemeToggler,
} from "../contexts/theme.context.js";
function Modal({
	children,
	toggleHandler,
	selectedID,
	enableThemeToggle,
	overrideStyle,
}) {
	const isDark = useContext(ThemeToggle);
	const themeDispatch = useContext(DispatchThemeToggler);
	const bgColor = isDark ? `rgb(0, 0, 0, 0.8)` : `rgb(255, 255, 255, 0.9)`;
	const variants = {
		visible: {
			opacity: 1,
			translateX: 0,
			translateY: 0,
		},
		hidden: {
			opacity: 0,
			translateX: `${selectedID % 2 === 0 ? -25 : 50}`,
		},
	};
	const handleThemeToggle = (e) => {
		e.preventDefault();
		themeDispatch({ type: "TOGGLE", isDark: !isDark });
	};
	const closeIconSize = "2.4rem";
	return (
		<React.Fragment>
			<motion.div
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.5 }}
				variants={variants}
				style={{
					width: "100vw",
					height: "100vh",
					backgroundColor: "rgb(0,0,0,0.4)",
					position: "fixed",
					top: 0,
					left: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					pointerEvents: "auto",
					zIndex: 2,
				}}>
				<div
					style={!!overrideStyle ? overrideStyle : null}
					className="modalContent">
					{enableThemeToggle && (
						<ThemeToggleBtn
							handleThemeToggle={handleThemeToggle}
							isDarkMode={isDark}
						/>
					)}
					<div className="closeIcon">
						<MdOutlineClose
							style={{ fontSize: closeIconSize }}
							onClick={toggleHandler}
						/>
					</div>
					<div
						style={{
							position: "absolute",
							top: `calc(${closeIconSize} + 1rem)`,

							width: "100%",
							height: `calc(90% - 2rem)`,
						}}>
						{children}
					</div>
					<style jsx>{`
						.modalContent {
							width: 80vw;
							height: 80vh;
							background: ${bgColor};
							border: white 1px solid;
							position: relative;
							overflow-x: hidden;
							z-index: 2;
						}
						.closeIcon {
							color: white;
							position: fixed;
							top: 2%;
							right: 8%;
							display: block;
							z-index: 3;
							transition: 0.4s all ease-in;
							pointer-events: auto;
							touch-action: auto;
						}
						.closeIcon:hover {
							transform: rotate(0.5turn);
							transform-origin: buttom left;
						}
						@media screen and (max-width: 900px) {
							.modalContent {
								overflow-y: auto;
							}
						}
						@media screen and (max-width: 420px) {
							.modalContent {
								width: 90%;
								height: 90%;
							}
							.closeIcon {
								top: 0.3rem;
								right: 1rem;
							}
						}
					`}</style>
				</div>
			</motion.div>
		</React.Fragment>
	);
}
export default memo(Modal);
