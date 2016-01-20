var isVowel = function(word) {
  var wordArray = word.split('');
  return (/^[aeiou]$/i).test(wordArray[0]);
};

var isQu = function(word) {
  var wordArray = word.split('');
  return (/^[q]$/i).test(wordArray[0]);
};
var isQuTwo = function(word) {
  var wordArray = word.split('');
  return (/^[q]$/i).test(wordArray[1]);
};

var isVowel2 = function(word) {
  var wordArray = word.split('');
  return (/^[aeiou]$/i).test(wordArray[1]);
};

var isCon = function(word) {
 if (isVowel(word) === false ) {
  var wordArray = word.split('');
  var shiftArray = wordArray.shift();
  wordArray.push((shiftArray) + "ay");
  return wordArray.join("");
};
};

var isDoubleCon = function(word) {
  if (isVowel(word) || isVowel2(word) === false) {
  var wordArray = word.split('');
  var shiftArray = wordArray.shift();
  var secondArray = wordArray.shift();
  wordArray.push(shiftArray);
  wordArray.push((secondArray) + "ay");
  return wordArray.join("");
};
};

var hasQuFirst = function(word) {
 if (isQu(word) === true) {
  var wordArray = word.split('');
  var shiftArray = wordArray.shift();
  var shiftSecond = wordArray.shift();
  wordArray.push(shiftArray);
  wordArray.push((shiftSecond) + "ay");
  return wordArray.join("");
};
};

var hasQuSecond = function(word) {
  if (isQuTwo(word) === true) {
  var wordArray = word.split('');
  var shiftArray = wordArray.shift();
  var secondArray = wordArray.shift();
  var thirdArray = wordArray.shift();

  wordArray.push(shiftArray);
  wordArray.push(secondArray);
  wordArray.push((thirdArray) + "ay");
  return wordArray.join("");
};
};

$(document).ready(function() {
  $("#pigForm").submit(function(event) {
    var input = $(".userInput").val();
    console.log("hey");
    $(".output").text(input);
    event.preventDefault();
  });
});
