var fs = require('fs');
var express = require('express');
var infile = fs.readFileSync('index.html', "utf-8");
var buffer = new Buffer(infile);
buffer.write(infile);

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
