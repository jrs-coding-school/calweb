// javascript!

// comment

// datatypes
// primitives

// 1. numbers
console.log(2 + 2);
console.log(3.14);
// 2. booleans
// true or false

// 3. strings
console.log(typeof 2);
console.log("this is a string");

// null undefined NaN

// objects
// 4. objects
var myObj = {};
    myObj = {
      propName: "propvalue"
    };


// 5. arrays

var myArr = [1,2,3,"four", "five", true, false, {bad:"ass"}, function() {return "hello world"}, null, undefined];



// 6 functions

function nameOfFunction() {

  console.log("im a function");

}

// logical operators
// && and
// || or
// ! not

var myBool = false;
if("hello" === "hello") {
  console.log("you're so true");
} else if(myBool === false) {
  console.log("you are not right");
} else {
  console.log("gave up, eh?");
}




// alert("hi everyone!");
// alert("hi one!");
// alert("hi every!");

// var wantToDo = confirm("are you sure you want to do this?");
// console.log("want to do this?", wantToDo);

var howManyKids = prompt("how many kids?");
console.log('how many kids', howManyKids);
