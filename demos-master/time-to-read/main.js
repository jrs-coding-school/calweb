function ready(fn) {

  if(typeof fn !== 'function') return;

  if(document.readyState === "complete" || document.readyState === "interactive") {
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn, false);
}
ready(function () {
  var childArr = [].slice.call(document.body.children);

  // readTime.configWPM(10);

  document.querySelector('h3.reading-time').innerHTML = readTime.words(childArr);



});


// function readTime(wpm) {
//   if(typeof wpm !== "number") {return "sorry, must use a number"};
//   var wpm = wpm || 230; // if you want a default
//   return wpm;
// }
//
// readTime(500);
