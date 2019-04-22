var readTime = (function () {
  'use strict';
  var config = {
    wpm: 230
  };

  function setWPM(wpm) {
    config.wpm = wpm;
  }
  function getWPM() {
    return config.wpm;
  }
  // assuming a NodeList converted to an Array
  function getTextFromNodes(wordArray) {
    var txtWords = "";
    wordArray.forEach(function (item) {
      txtWords += item.textContent;
    });
    return txtWords;
  }
  function removePunctuation(words) {
    var re = /[.,'?!-"]/g;
    console.log("without stripping: ", words);
    var strippedWords = words.replace(re, "");
    console.log("stripped words: ", strippedWords);
    return strippedWords;
  }
  function countWords(words) {
    var trimmedWords = words.trim();
    var newWords = removePunctuation(trimmedWords);
    return newWords.split(" ").length;
  }
  function calcWPM(numWords) {
    var wpm = Math.round(numWords / getWPM());
    return wpm < 2 ? "1 minute read" : wpm + " minute read";
  }

  return {
      configWPM: setWPM,
      words: function (wordArray) {
        return calcWPM(countWords(getTextFromNodes(wordArray)));
      },
      
  };


})();
