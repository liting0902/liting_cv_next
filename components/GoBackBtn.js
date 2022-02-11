import React, { useContext, useEffect, useState } from "react";
import BtnLayout from "../components/layouts/BtnLayout.js";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/router";

export default function () {
	const [hideBtn, setHideBtn] = useState(false);
	const router = useRouter();
	useEffect(() => {
		if (window.history.length === 1) {
			setHideBtn(true);
		}
	}, []);
	const handleBack = (event) => {
		event.preventDefault();
		console.log("back", window.history.length);
		router.back();
	};
	if (hideBtn) {
		return null;
	}
	return (
		<div
			style={{
				marginTop: ".6rem",
				position: "absolute",
			}}>
			<BtnLayout>
				<a className="aBackBtn" onClick={handleBack}>
					<MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
				</a>
				<style jsx>{`
					.aBackBtn {
						color: white;
						text-decoration: none;
					}
					.aBackBtn:hover {
						color: black;
						font-weight: bolder;
						transition: all 0.6s ease-in;
					}
				`}</style>
			</BtnLayout>
		</div>
	);
}
