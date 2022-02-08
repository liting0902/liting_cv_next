// const {
// 	PHASE_DEVELOPMENT_SERVER,
// 	PHASE_EXPORT,
// 	PHASE_PRODUCTION_BUILD,
// 	PHASE_PRODUCTION_SERVER,
// } = require("next/constants");
const fs = require("fs");
const webpack = require("webpack");
const { default: next } = require("next");
const { i18n } = require("./next-i18next.config.js");
const { firebaseConfig } = require("./firebase.config.js");
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const config = {
	i18n,
	env: {
		FIREBASE_CONFIG: firebaseConfig,
		PROJECT_ID: "litingcv",
		WEB_API_KEY: "FIREBASE_WEB_API_KEY",
	},
	webpack5: true,
	webpack: (config) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				"window.firebase": path.resolve(
					__dirname,
					"lib/firebaseApp.js"
				),
				// firebaseApp: path.resolve(__dirname, "lib/firebaseApp.js"),
			})
		);
		return config;
	},
};
module.exports = withBundleAnalyzer(config);
