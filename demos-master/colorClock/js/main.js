

var one = 1;
var randomColor = function(){
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += randomSingleGenerator();
  }
  return color;
};

var randomSingleGenerator = function() {
  var letters = '0123456789ABCDEF'.toLowerCase().split('');
  return letters[Math.floor(Math.random() * 16)];
};

var getDate = function() {
  return new Date;
}

setInterval(function() {
  var date = getDate();
  hour = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  console.log('' + hour + ":" + minutes + ":" + seconds);
  $('#clock').html('' + hour + ":" + minutes + ":" + seconds);
  var clockColor = randomColor();
  $("#clock").css('color',clockColor);
  var newColor = randomColor();
  $('body').css('background-color',newColor);
},1000);

