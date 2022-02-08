import React, { useContext, useEffect, useState } from "react";
import BtnLayout from "../components/layouts/BtnLayout.js";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/router";
import { LanguageContext } from "../contexts/language.context.js";
export default function () {
	const language = useContext(LanguageContext);
	const router = useRouter();

	return (
		<div
			style={{
				marginTop: ".6rem",
				position: "absolute",
			}}>
			<BtnLayout>
				<Link href={`/admin`} locale={language}>
					<a className="aBackBtn">
						<MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
					</a>
				</Link>
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
