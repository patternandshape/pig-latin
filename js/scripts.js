var isVowel = function(word) {
  var wordArray = word.split('');
  return (/^[aeiou]$/i).test(wordArray[0]);
};

var isCon = function(word) {
  if (isVowel(word) === false ) {
    var wordArray = word.split('');
    var shiftArray = wordArray.shift();
    wordArray.push((shiftArray) + "ay");
    return wordArray.join("");
  };
};

var isVowel2 = function(word) {
  var wordArray = word.split('');
  return (/^[aeiou]$/i).test(wordArray[1]);
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

var isQu = function(word) {
  var wordArray = word.split('');
  return (/^[q]$/i).test(wordArray[0]);
};
var isQuTwo = function(word) {
  var wordArray = word.split('');
  return (/^[q]$/i).test(wordArray[1]);
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
var plMaker = function(word) {



  if (isVowel(word) === true) {
    var word = (word + "ay");
    return word;

  } else if (isQu(word) === true) {
    var word = hasQuFirst(word);
    return word;

  } else if(isQuTwo(word)=== true) {
    var word = hasQuSecond(word);
    return word;

  } else if (isVowel(word) === false) {
    var word = isCon(word);
    return word;

  } else if (isVowel2(word) === true) {
    var word = isCon(word);
    return word;

  } else if (isVowel2(word) === false) {
    var word = isDoubleCon(word);
    return word;

  } else if (isQu(word) === false) {
    var word = hasQuSecond(word);
    return word;

  } else {
    var word = "Please speak English";
    return word;
  }
}

$(document).ready(function() {

  $("#pigForm").submit(function(event) {
    var input = $(".userInput").val();
    var plo = plMaker(input);
    $(".output").text(plo);

    event.preventDefault();

  })
});
