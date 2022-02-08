import React, { memo } from "react";
import { motion } from "framer-motion";
function CardLayout(props) {
	const { overrideStyle } = props;
	return (
		<React.Fragment>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<div
					style={!!overrideStyle ? overrideStyle : null}
					className="card">
					{props.children}
				</div>
			</motion.span>
			<style jsx>{`
				.card {
					min-width: 22.5rem;
					width: 36vw;
					height: 35vh;
					min-height: 12rem;
					background: rgb(255, 255, 255, 0.3);
					margin: 1rem 1rem;
					border-radius: 25px;
					color: rgb(255, 255, 255);
					overflow: hidden;
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					box-sizing: border-box;
					z-index: 1;
				}
				@media screen and (max-width: 769px) {
					.card {
						min-width: 300px;
						width: 70vw;
						height: 20vh;
						margin: 1em auto;
					}
				}
				@media screen and (max-width: 280px) {
					.card {
						min-width: 90vw;
						width: 80%;
						margin: 5px auto;
						border-radius: 5px;
					}
				}
			`}</style>
		</React.Fragment>
	);
}
export default memo(CardLayout);
