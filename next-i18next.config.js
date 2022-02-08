const path = require("path");
module.exports = {
	i18n: {
		defaultLocale: "zh",
		locales: ["en", "zh"],
		localeDetection: false,
		localePath: path.resolve("./public/static/locales"),
	},
};
