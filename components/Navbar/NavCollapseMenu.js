import React from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
function CollapseMenu({ displayMenu, setDisplayMenu, children }) {
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
      <div
        className="navcollapse"
        style={{
          opacity: `${displayMenu ? 1 : 0}`,
          pointerEvents: `${displayMenu ? "auto" : "none"}`,
        }}
      >
        {children}
      </div>

      <style jsx>{``}</style>
    </>
  );
}
export default CollapseMenu;
