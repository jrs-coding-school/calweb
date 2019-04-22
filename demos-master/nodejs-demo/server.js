var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('port', process.env.PORT || 9001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var myData = {
  title: "super awesome dev person",
  salary: 500000,
  experience: "3 months"
};
var yourData = {
  title: "super awesome jr. dev person",
  salary: 60000,
  experience: "3 months"
};
var imLucky = [1000, 1, 10000, 130023932];
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app
  .get('/', function (request, response) {
    var winning = random(imLucky)
    response.status(418).send("you win: $" + winning);
  });
app.post('/', function (req, res) {

})

  app.get('/unrealistic-expectations', function (request, response) {
    response.status(200).json(myData);
  });


app.listen(app.get('port'), function () {
  console.log("successfully started server on PORT", app.get('port'));
})
