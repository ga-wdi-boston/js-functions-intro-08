'use strict';

var paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

// 1. Write a function that splits a string into an array of normalized words,
//    (lowercase without punctuation).
var getNormalizedWords = function(paragraph) {
  var normalizedWords = [];
  normalizedWords = paragraph.split(/\s+/);
  for (var i = 0; i < normalizedWords.length; i++)
  {
    normalizedWords[i] = normalizedWords[i].replace(/[^\w']+/, '').toLowerCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string and returns an array of it's unique
//    normalized words.
var getUniqueWords = function(listOfWords) {
  /* your code goes here */
  var dictionaryOfWords = {};
  for (var i = 0; i < listOfWords.length; i++) {
    if(dictionaryOfWords[listOfWords[i]] === undefined)
    {
     dictionaryOfWords[listOfWords[i]] = true;
    }
    else {
      dictionaryOfWords[listOfWords[i]] = false;
    }
  }
  return dictionaryOfWords;
  console.log(dictionaryOfWords);
};

getUniqueWords(getNormalizedWords(paragraph));

// 3. Write a function that counts how many words are in a string, providing
//    the *option* to count unique words instead of total words.
var wordCount = function(wordCountInput, decision) {
  /* your code goes here */
  var result = 0;
  if(decision === 'total') {
    result = getNormalizedWords(wordCountInput).length;
    return result;
  }
  else if (decision === 'unique') {
    var dictionary = {};
    var result = 0;
    dictionary = getUniqueWords(getNormalizedWords(wordCountInput));
    for (var reference in dictionary)
    {
      if(dictionary[reference] === true)
      {
        result++;
      }
    }
    return result;
  }
  else {
    console.log("You didn't give me 'total' or 'unique.'");
  }

};
var wordsInAString = 0;
console.log(wordCount(paragraph, 'total'));

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords: getNormalizedWords,
  getUniqueWords: getUniqueWords,
  wordCount: wordCount
};
