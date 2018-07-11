var http = require('http');
/*var fs=require('fs');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html', function(err,data){
        if(err){
            return console.log("file read error");
        }
        res.end(data);
    });
  });*/
  
  var express=require('express');
  var app = express();
  var server = http.Server(app);
  
  app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
  });
  app.get('/system/about', function(req,res){
    res.sendFile(__dirname+'/about.html');
  });
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
