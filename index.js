var http = require("http");
var url = require("url");

var server = http.createServer();

server.on("request", function(req, res) {
	//var date = new Date();
	//res.end("La hora actual es: " + date.getHours() + ":" + date.getMinutes());

	var urlData = url.parse(req.url, true);
	res.end(JSON.stringify(urlData));
});

server.listen(process.env.PORT || 3000);