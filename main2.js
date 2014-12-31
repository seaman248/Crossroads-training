var http = require('http'),
	crossroads = require('crossroads');

var spitsRoute = crossroads.addRoute('spits/:id:');

spitsRoute.matched.add(function(id){
		console.log(id);
	});

http.createServer(function(req, res){
	crossroads.parse(req.url);
	res.end('asdf');
}).listen(8080);	