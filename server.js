const express = require("express");
const next = require("next");

const port = process.env.PORT || 3030;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

/*Custom server via Express - an easier setting approach*/
app.prepare().then(async () => {
	const server = express();
	// server.get("/:queryString/*", (req, res) => {
	//     const {queryString} = req.params ;
	//     app.render(req, res, {queryString})
	// })

	server.get("*", (req, res) => {
		return handle(req, res);
	});
	server.listen(port, (error) => {
		if (error) throw error;
		console.log(`listening on ***${port}***`);
	});
});
