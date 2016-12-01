var exp = require("express");
var url = require("url");
var app = exp();

app.use(exp.static('public'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
})

app.get('*', function(req, res) {
	res.sendStatus(404);
})

/*var server = http.createServer();

server.on("request", function(req, res) {
	//var date = new Date();
	//res.end("La hora actual es: " + date.getHours() + ":" + date.getMinutes());

	var urlData = url.parse(req.url, true);
	res.end(JSON.stringify(urlData));
});*/

app.listen(process.env.PORT || 3000);