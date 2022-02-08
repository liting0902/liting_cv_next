import React from "react";

export default function (props) {
	const { overrideStyle } = props;
	return (
		<React.Fragment>
			<div
				style={!!overrideStyle ? overrideStyle : null}
				className="containerRowFlex">
				{props.children}
			</div>
			<style jsx>{`
				.containerRowFlex {
					display: flex;
					flex-direction: row;
					justify-content: space-evenly;
					flex-wrap: wrap;
					width: 96vw;
					height: calc(100vh - 8rem);
					margin: 0 auto;
					overflow: ${!!props.openModal && props.openModal
						? `hidden`
						: `auto`};
				}
				@media screen and (min-width: 930px) {
					.containerRowFlex {
						width: 80vw;
						height: calc(100vh - 4rem);
						align-content: center;
					}
				}
				@media screen and (max-width: 700px) {
					.containerRowFlex {
						align-content: start;
						align-items: flex-start;
						margin: 0.5rem auto;
						height: calc(100vh - 8rem);
					}
				}
			`}</style>
		</React.Fragment>
	);
}
