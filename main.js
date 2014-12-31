var crossroads = require('crossroads'),
http = require('http');

crossroads.addRoute('/spits/:id:', function(id){
	console.log(id);
});

http.createServer(function(req, res){
	crossroads.parse(req.url);
	res.end('thats all');
}).listen(3000);