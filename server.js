
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
  
var http = require('http');

var mongoose=require('mongoose');
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  
  mongoose.connect("mongodb://localhost:27017/node-cw8");
  mongoose.connection.on('error', function(){
    console.log('caould not connect to mongodb');
  })
  
  var userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:"Name is required"
    },
    email:String
  });
 var User = mongoose.model('User', userSchema);
 //var mongoose = require ('mongoose');
// var db, uri = "mongodb://" + process.env.IP + "/test";
   
//   mongo.MongoClient.connect(uri,{userNewUrlParser:true},function(err,client){
//     if(err){console.log("Could not connect to MongoDB")
//     }
//     else {
//       db = client.db('simplenode');
//       console.log("Database Created")
//     }
//   });
   
  var save = function(form_data){
    db.createCollection('users',function(err,collection){ if (err) throw err;});
    var collection = db.collection('users');
    collection.save(form_data);
    
  }
  
 var server = http.Server(app);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  
  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
  })
  
  app.get('/about', function(req, res){
    res.sendFile(__dirname+'/about.html');
  });
  
   app.get('/form', function(req, res){
    res.sendFile(__dirname+'/form.html');
  });
  
  app.post('/signup', function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    console.log("post received: %s %s", username, email);
});

app.post('/submit_user',function(req, res){
  console.log(req.body);
  var new_user=new User(req.body);
  new_user.save(function(err,data){
    if(err){
      return res.status(400)
      .json({message:"Couldn't save user"})
    }
    res.status(200).json(data);
  })
  // save(req.body);
  // res.status('200');
});

 
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
});