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
  var bodyParser= require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  
  app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
  });
  app.get('/system/form', function(req,res){
    res.sendFile(__dirname+'/form.html');
  });
  
  app.post('/submit_user', function(req,res){
    console.log(req.body);
  });
  
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
