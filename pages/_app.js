import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import routeConfig from "../lib/routeConfig.js";
import { LanguageProvider } from "../contexts/language.context.js";
import { ModalTogglerProvider } from "../contexts/modal.context.js";
import { AuthProvider } from "../contexts/auth.context.js";
import { ThemeTogglerProvider } from "../contexts/theme.context.js";
import { UpdateExperienceDataProvider } from "../contexts/updateExperienceData.context.js";
import { SetExperienceProvider } from "../contexts/setExperience.context.js";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import "./index.css";
function App({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<title>LiTing-Frontend Engineer</title>
				<meta
					name="viewpoer"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<LanguageProvider>
				<ModalTogglerProvider>
					<ThemeTogglerProvider>
						<AuthProvider>
							<UpdateExperienceDataProvider>
								<SetExperienceProvider>
									<Navbar routeConfig={routeConfig} />
									<div
										style={{
											height: "90vh",
											width: "100vw",
											paddingTop: "4rem",
										}}>
										<Component {...pageProps} />
									</div>
								</SetExperienceProvider>
							</UpdateExperienceDataProvider>
						</AuthProvider>
					</ThemeTogglerProvider>
				</ModalTogglerProvider>
			</LanguageProvider>
		</React.Fragment>
	);
}

export default appWithTranslation(App);
