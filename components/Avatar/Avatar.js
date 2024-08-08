import React from "react";
import Image from "next/image";
import myProfileImg from "../../public/image/enFrance.jpg";
import styles from "./avatar.module.css";

export default function Avatar({ width, height, styleProps, hoverEffect }) {
  const divAvatar = {
    width: `${width}px`,
    height: `${height}px`,
    ...styleProps,
  };
  return (
    <React.Fragment>
      <div>
        <div className={hoverEffect ? "hoverEffect" : "null"} style={divAvatar}>
          <Image
            className={styles.imgProfile}
            src={myProfileImg.src}
            width={width}
            height={height}
            // layout="responsive"
            priority
            alt="Personal profile"
          />
        </div>
      </div>
      <style jsx>{`
        .hoverEffect {
          transition: all 1s;
        }
      `}</style>
    </React.Fragment>
  );
}
