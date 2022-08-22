import React, { useEffect } from "react";
import CardsContainer from "../../components/layouts/CardsContainer.js";
import CardLayout from "../../components/layouts/CardLayout.js";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { useRouter } from "next/router";
function UpdatePage({ t }) {
	const route = useRouter();
	useEffect(() => {
		if (!window.sessionStorage.getItem("admin")) {
			route.push("/admin");
		}
	});
	// if (!window.sessionStorage.getItem("admin")) {
	// 	route.push("/admin");
	// 	return null;
	// }
	return (
		<React.Fragment>
			<CardsContainer>
				<CardLayout>
					<Link href="/admin/personal-statement">
						<a className="adminLink">
							<h1>Personal Statement</h1>
						</a>
					</Link>
				</CardLayout>
				<CardLayout>
					<Link href="/admin/experience">
						<a className="adminLink">
							<h1>Education Work Experience</h1>
						</a>
					</Link>
				</CardLayout>
				<style jsx>{`
					.adminLink {
						height: 100%;
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						text-decoration: none;
						color: inherit;
					}
				`}</style>
			</CardsContainer>
		</React.Fragment>
	);
}
export default withTranslation("common")(UpdatePage);
