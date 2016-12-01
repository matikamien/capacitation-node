var http = require("http");

var server = http.createServer();

server.on("request", function(req, res) {
	var date = new Date();
	res.end("La hora actual es: " + date.getHours() + ":" + date.getMinutes());
});

server.listen();