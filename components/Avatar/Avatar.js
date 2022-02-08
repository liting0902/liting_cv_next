import React from "react";
import Image from "next/image";
import myProfileImg from "../../public/image/0988835792D3.jpg";
import styles from "./avatar.module.css";

export default function ({ width, height, styleProps, hoverEffect }) {
	const divAvatar = {
		width: `${width}px`,
		height: `${height}px`,
		...styleProps,
	};
	return (
		<React.Fragment>
			<div>
				<div
					className={hoverEffect ? "hoverEffect" : "null"}
					style={divAvatar}>
					<Image
						className={styles.imgProfile}
						src={myProfileImg}
						width={width}
						height={height}
						layout="responsive"
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
