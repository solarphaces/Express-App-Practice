var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.json());

app.get("/hello", function(request, respond) {
	respond.json({
		"hello": "hello Luis",
		"Syntax": "no its not es6"
	});
});

app.post("/hello", (request, respond) =>{
	console.log(request.body);
});


// app.get("/hello", function(request, respond) => {
	// Alternative **
// });

app.listen(8080);
console.log("server is running");