"use client";
import React, { useState, memo } from "react";
import { useWindowSize } from "../../hooks/useWindowSize.js";
import LocaleButton from "../LocaleButton/LocaleButton.js";
// import "./navbar.css";
import Avatar from "../Avatar/Avatar.js";
import NavItem from "./NavItem.js";
import NavCollapseMenu from "./NavCollapseMenu.js";
import SignOutBtn from "../SignOutBtn.jsx";
import { usePathname } from "next/navigation";

const Navbar = ({ routeConfig, setLoading = false, locale }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const pathname = usePathname();

  const thePath = pathname;
  const size = useWindowSize();
  const isMobile = size.width < 420;
  const NavLinks = routeConfig.map((item, index) => {
    return (
      <div key={index} className="navItem">
        <NavItem
          path={item.path}
          title={item.title}
          setDisplayMenu={setDisplayMenu}
          setLoading={setLoading}
          locale={locale}
        />
      </div>
    );
  });

  const avatarSize = 50;
  const avatarStyle = {
    display: `${!isMobile ? "block" : "none"}`,
    position: "absolute",
    left: "1rem",
    border: "white 3px solid",
    borderRadius: "50%",
    zIndex: "1",
  };

  return (
    <React.Fragment>
      <div className="nav">
        <Avatar
          width={avatarSize}
          height={avatarSize}
          hoverEffect
          styleProps={avatarStyle}
        />

        {!isMobile ? (
          <div className="navLinks">{NavLinks}</div>
        ) : (
          <NavCollapseMenu
            displayMenu={displayMenu}
            setDisplayMenu={setDisplayMenu}
          >
            {NavLinks}
          </NavCollapseMenu>
        )}
        <LocaleButton />
        {thePath.match("/admin") && <SignOutBtn locale={locale} />}
      </div>
    </React.Fragment>
  );
};
export default memo(Navbar);
