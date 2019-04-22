
// numbers
// strings
// objects
// arrays

// functions

function sayHello(name, adj) {
  if(name && adj === undefined) {
  console.log("hello " + name + " they are " + adj);
  return "hello " + name + " and they are " + adj;
} else {
  console.log("please enter name and adj");
  return "wah wah....doesnt work";
}
}
var helloText = sayHello("Blake", "awesome");


function characterCount(sentence) {
  var charCount = sentence.split(" ").join("").length;
  return charCount;
}

function wordCount(words) {
  console.log(words.split(" "));
  return words.split(" ").length;
}

var sumFun = function() {
  var args = [].slice.call(arguments);
  var total = 0;
  for(var i = 0; i < args.length ; i++ ) {
    total = total + args[i];
  }
  console.log(total);
  return total;
};
var textArr = ["pluto", "rocks"];
function addText(element, index, arr) {
     arr[index] = "text";
}

textArr.forEach(addText);
