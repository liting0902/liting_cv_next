import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize.js";
import LocaleButton from "../LocaleButton.js";
import styles from "./Navbar.module.css";
import Avatar from "../Avatar/Avatar";
import NavItem from "./NavItem.js";
import NavCollapseMenu from "./NavCollapseMenu.js";
import SignOutBtn from "../SignOutBtn.jsx";
import { useRouter } from "next/router";

const Navbar = ({ routeConfig }) => {
	const [displayMenu, setDisplayMenu] = useState(false);
	const router = useRouter();
	const navBgColor = {
		background: `rgb(25,25,25,0.8)`,
	};
	const PATH = router.pathname;
	const size = useWindowSize();
	const isMobile = size.width < 420;
	const NavLinks = routeConfig.map((item, index) => {
		return (
			<div key={index} className={styles.navItem}>
				<NavItem
					path={item.path}
					title={item.title}
					setDisplayMenu={setDisplayMenu}
				/>
			</div>
		);
	});

	const avatarSize = 50;
	const avatarStyle = {
		display: `${!isMobile ? "block" : "none"}`,
		position: "absolute",
		left: "1rem",
		border: "black 3px solid",
		borderRadius: "50%",
		zIndex: "1",
	};

	return (
		<React.Fragment>
			<div className={styles.nav} style={navBgColor}>
				<Avatar
					width={avatarSize}
					height={avatarSize}
					hoverEffect
					styleProps={avatarStyle}
				/>

				{!isMobile ? (
					<div className={styles.navLinks}>{NavLinks}</div>
				) : (
					<NavCollapseMenu
						navBgColor={navBgColor}
						displayMenu={displayMenu}
						setDisplayMenu={setDisplayMenu}>
						{NavLinks}
					</NavCollapseMenu>
				)}
				<LocaleButton />
				{PATH.match("/admin") && <SignOutBtn />}
			</div>
		</React.Fragment>
	);
};
export default Navbar;
