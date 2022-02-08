import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdOutlineGTranslate, MdClose } from "react-icons/md";
import { withTranslation } from "next-i18next";
import BtnLayout from "../components/layouts/BtnLayout.js";
import {
	LanguageContext,
	DispatchContext,
} from "../contexts/language.context.js";
function LocaleButton({ t }) {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const language = useContext(LanguageContext);
	const dispatch = useContext(DispatchContext);
	const handleOpenPopover = (event) => {
		event.preventDefault();
		setOpen((prev) => !prev);
	};
	const setLanguage = (_lang) => {
		const lang = _lang.toLowerCase();
		setOpen((prev) => !prev);
		dispatch({ type: "TRANSLATE", language: lang });
	};
	return (
		<React.Fragment>
			<BtnLayout>
				<div onClick={handleOpenPopover}>
					{open ? <MdClose /> : <MdOutlineGTranslate />}
				</div>
			</BtnLayout>
			<div className="popover">
				<Link href={`${router.pathname}`} locale={"en"}>
					<a className="langMenu" onClick={() => setLanguage("en")}>
						{t("En")}
					</a>
				</Link>
				<Link href={`${router.pathname}`} locale={"zh"}>
					<a className="langMenu" onClick={() => setLanguage("zh")}>
						{t("Zh")}
					</a>
				</Link>
			</div>
			<style jsx>{`
				.popover {
					width: auto;
					height: auto;
					position: fixed;
					top: 4rem;
					right: 1.4rem;
					transition: all 0.8s;
					opacity: ${open ? 1 : 0};
				}
				.closePop {
					color: white;
					font-size: 2.4rem;
					opacity: ${open ? 1 : 0};
					transition: all 2s ease-in;
				}
				.langMenu {
					display: block;
					text-align: center;
					text-decoration: none;
					width: 5rem;
					height: 2rem;
					background: rgb(255, 255, 255, 0.5);
					color: black;
					font-size: 1.4em;
					cursor: pointer;
					outline: inherit;
					border: white 1px solid;
				}
				.langMenu:hover {
					background: rgb(255, 255, 255, 0.8);
				}
			`}</style>
		</React.Fragment>
	);
}
export default withTranslation("common")(LocaleButton);
