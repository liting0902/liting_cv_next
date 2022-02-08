import React, { useContext, useEffect, useState, useRef } from "react";
import { ThemeToggle } from "../../contexts/theme.context.js";
import { useRouter } from "next/router";

function PersonalStatement(props) {
	const contentRef = useRef();
	const isDark = useContext(ThemeToggle);
	const route = useRouter();
	const [psContent, setPsContent] = useState();
	useEffect(() => {
		if (!!contentRef.current) {
			contentRef.current.value = psContent && psContent.content;
		}
	});
	useEffect(() => {
		const getData = async () => {
			await fetch(`/api/personal-statement/${route.locale}`)
				.then((res) => {
					return res.json();
				})
				.then((resJson) => setPsContent(JSON.parse(resJson.data)));
		};
		getData();
	}, []);
	if (!psContent) {
		return <h1 style={{ color: "white" }}>Loading...</h1>;
	}
	return (
		<React.Fragment>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					height: "100%",
				}}>
				<textarea
					readOnly={true}
					cols="98"
					rows="26"
					className="textareaPS"
					ref={contentRef}></textarea>
				<style jsx>
					{`
						.textareaPS {
							display: block;
							border: none;
							background: transparent;
							letter-spacing: 0.1rem;
							padding: auto 1rem;
							font-size: 1em;
							color: ${isDark ? `white` : `black`};
							width: 98%;
							height: 100%;
						}
						.textareaPS:focus {
							outline: none !important;
						}
					`}
				</style>
				<div></div>
			</div>
		</React.Fragment>
	);
}

export default PersonalStatement;
