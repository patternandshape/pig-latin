var isVowel = function(word) {
  var wordArray = word.split('');
  return (/^[aeiou]$/i).test(wordArray[0]);
};

var isCon = function(word) {

  var wordArray = word.split('');
  var shiftArray = wordArray.shift();
  wordArray.push((shiftArray) + "ay");
  return wordArray.join("");

};

var isDoubleCon = function(word) {
  var wordArray = word.split('');
  var shiftArray = wordArray.shift();
  var secondArray = wordArray.shift();

  wordArray.push(shiftArray);
  wordArray.push((secondArray) + "ay");
  return wordArray.join("");

};

var hasQuSecond = function(word) {
  var wordArray = word.split('');
  var shiftArray = wordArray.shift();
  var secondArray = wordArray.shift();
  var thirdArray = wordArray.shift();

  wordArray.push(shiftArray);
  wordArray.push(secondArray);
  wordArray.push((thirdArray) + "ay");
  return wordArray.join("");
};


$(document).ready(function() {

$("#result").show();
event.preventDefault();

});
