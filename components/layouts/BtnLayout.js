import React from "react";
/**@function component
 * wrap any button
 */
export default function ({ children, overrideStyle }) {
	return (
		<span className="btn" style={!!overrideStyle ? overrideStyle : null}>
			{children}
			<style jsx>{`
				.btn {
					position: relative;
					background: black;
					display: inline-flex;
					margin: auto 1rem;
					padding: 0.5rem;
					border-radius: 5%;
					height: 2rem;
					width: auto;
					cursor: pointer;
					font-size: 2rem;
					color: rgb(255, 255, 255);
				}
				.btn:hover {
					background: rgb(200, 200, 200, 0.7);
					color: rgb(0, 0, 0);
					transition: all 0.2s ease-in;
				}
			`}</style>
		</span>
	);
}
