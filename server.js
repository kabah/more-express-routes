'use strict'

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send("You're home!");
});

//pick a color
app.get("/color/:choice", function(req, res) {
	var choice = req.params.choice;
	res.send("Your color is: " + choice);
});

//start server
app.listen(port, function() {
	console.log('Server started on', port);
});

