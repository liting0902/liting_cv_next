import React, { Fragment, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { withTranslation } from "next-i18next";
import { LanguageContext } from "../../contexts/language.context.js";
function NavItem({ t, path, title, setDisplayMenu }) {
	const language = useContext(LanguageContext);
	const router = useRouter();
	const { locale } = router;
	return (
		<Fragment>
			{/* <Link href={`/${locale}/${path}`} locale={false}> */}
			<Link href={`/${path}`} locale={language}>
				<a className="navLink" onClick={(e) => setDisplayMenu(false)}>
					{t(`${title}`)}
				</a>
			</Link>
			<style jsx>{`
				.navLink {
					font-size: 1.2em;
					color: deeppink;
					text-decoration: none;
					vertical-align: middle;
				}
				.navLink:hover {
					color: yellowgreen;
				}
			`}</style>
		</Fragment>
	);
}
export default withTranslation("common")(NavItem);
