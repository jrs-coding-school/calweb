var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var mongoConfig = process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/test';
var Message = require('./Message');

mongoose.connect(mongoConfig);


mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});


app.use(express.static(__dirname + "/app"))

app.get('/', function(req,response) {
  response.sendFile('app');
});

app.get('/maybe', function(req,res) {
  res.send("<p>what am i doing</p>");
});


http.listen(port);



io.on('connection', function(socket) {
  console.log("SOMEONE NEW JOINED US");


    Message.find({},function(err,data) {
      socket.emit('all:messages', data)
    });

  socket.on('new:chat', function(val) {
    var message = new Message({
        text: val
    });

    message.save(function(err,data) {
      console.log(data);
      io.emit('new:chat', data.text);
    });
  })
})

console.log('WE ARE RUNNING ON PORT:' + port);
