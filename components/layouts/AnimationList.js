import React from "react";
import { motion } from "framer-motion";
function StyledList({ index, children, isDarkMode }) {
	const fontColor = isDarkMode ? `white` : `black`;
	return (
		<React.Fragment>
			<motion.li
				key={index}
				initial={{
					opacity: 0,
					translateX: 20,
				}}
				animate={{
					opacity: 1,
					translateX: 0,
					translateY: 0,
				}}
				transition={{
					duration: 0.3,
					delay: 0.2 * index,
				}}>
				<span className="listStyle">{children}</span>
			</motion.li>
			<style jsx>{`
				.listStyle {
					width: 100%;
					list-style: none;
					color: ${fontColor};
					line-height: 1.6rem;
					letter-spacing: 0.2rem;
					font-size: 1rem;
					display: flex;
					align-items: center;
					margin: 1.4rem 0 0 -1.5rem;
				}
			`}</style>
		</React.Fragment>
	);
}

export default StyledList;
