import React from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
function CollapseMenu({ navBgColor, displayMenu, setDisplayMenu, children }) {
	const iconStyle = {
		color: "white",
		fontSize: "2rem",
		position: "absolute",
		left: "1rem",
		top: "1rem",
	};
	return (
		<>
			{displayMenu ? (
				<MdClose
					style={iconStyle}
					onClick={() => setDisplayMenu((prev) => !prev)}
				/>
			) : (
				<MdOutlineMenu
					style={iconStyle}
					onClick={() => setDisplayMenu((prev) => !prev)}
				/>
			)}
			<div className="navcollapse">{children}</div>

			<style jsx>{`
				.navcollapse {
					width: 100%;
					height: auto;
					background: ${navBgColor.background};
					position: absolute;
					top: 4rem;
					transition: all 2s;
					opacity: ${displayMenu ? 1 : 0};
				}
			`}</style>
		</>
	);
}
export default CollapseMenu;
