var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200);
  request.pipe(response);
}).listen(8080)
console.log('Listening on port 8080...');
