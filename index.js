var http = require('http');
http.createServer(function(req,res){
  console.dir(req);
  res.writeHead(200);
  res.end('ok');
}).listen(8080);
