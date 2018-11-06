"use strict";

/* main.js */

/* Palindrome Checker */
function palindrome(str) {
  str = str.replace(/[\W_]/g, '');
  str = str.toLowerCase();
  var j = 1;
  var len = str.length;
  var count = 0;
  var resultTxt;

  for (var i = 0; i < len; i++) {
    if (str[i] == str[len - j]) {
      j++;
      count++;
    }
  }

  if (len == count) {
    resultTxt = "This is a palindrome word";
  } else {
    resultTxt = "Sorry, this is not a palindrome word";
  }

  return document.getElementById("result").innerHTML = resultTxt;
} // palindrome("eye");
// returns True.
// palindrome("e y e");
// returns True.
// palindrome("eye-ball");
// returns false.