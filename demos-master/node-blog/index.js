var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Blog = require('./blog');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Mongo Client
var mongoose = require('mongoose');
var mongoConfig = process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/test';

mongoose.connect(mongoConfig);

mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

app.use(express.static(__dirname + "/app"));

app.post('/create-blog', function(req,res,next) {
  console.log("Request From Client",req.body);
  var blog = new Blog(req.body)

  blog.save(function(err,data) {
    if (err) {
      console.log(err);
      next(err);
    }
    res.send(blog);
  })
});

app.get('/blogs', function(req,res) {
  var blogs = Blog.find({},function(err,data) {
    if(err) {
      console.log(err);
      next(err);
    }

    res.send(data);
  });
});

app.get('/blog-author/:name', function(req,res) {
  var blogs = Blog.find({author: req.params.name}, function(err,data) {
    if(err) next(err);

    if(data === null) {
      console.log('Could not find an author of that name');
    }
    console.log(req.body);
    console.log("FOUND POSTS BY" + req.params.name + data);
    res.send(data);
  })
})

app.get('/', function(req,res) {
  res.sendFile('app');
});


http.listen(port);
console.log('WE ARE RUNNING ON PORT:' + port);
