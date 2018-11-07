# Synopsis

This is a simple web application that checks if a word is a palindrome.

A [palindrome](https://en.wikipedia.org/wiki/Palindrome) is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.

My program will ignore any punctuation, case, and spacing.

## Code Explanation
I created a function named palindrome that takes one argument str.
```javascript
function palindrome(str) {};
```
Within that function, I start by using *regular expressions (regex)* to replace any white space or non-alphanumeric characters with nothing (or null), which essentially removes them from the string.
```javascript
str = str.replace(/[\W_]/g, '');
```
I used *String.prototype.toLowerCase()* to remove any capital letters because A is a different character than a.
```javascript
str = str.toLowerCase();
```
I then ran a for loop to check if the characters starting for the beginning match the characters starting from the end until we reach the middle of the string.
```javascript
var j     = 1;
var len   = str.length;
var count = 0;
var resultTxt;

for (var i = 0; i < len ; i ++){
  if (str[i] == str[len - j]) {
    j ++;
    count ++;
  }
}
```
Finally we return the result to the web app
```javascript
if (len == count){
  resultTxt = "This is a palindrome word";
}else {
  resultTxt = "Sorry, this is not a palindrome word";
}
return document.getElementById("result").innerHTML = resultTxt;
```

**Relevant Links**
1. [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
2. [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
3. [regex](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)

## Usage example

See a live version - https://alexdisdier.github.io/palindrome-checker/

## Directory Structure

```bash
-------------------------------------------

├── build
│   ├── images
│   ├── scripts
│   │   ├── main.js
│   │   ├── main.min.js
│   ├── styles
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── grid.css
│   │   ├── grid.min.css
│   │   ├── main.css
│   │   ├── main.min.css
│   │   ├── normalize.css
│   │   ├── normalize.min.css
└── ├── index.html
    └──  README.md
```

## Built With

* html
* css
* JavaScript

## Authors

**Alex Disdier** - *Initial work* - [alexdisdier](https://github.com/alexdisdier)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

This is part of JavaScript Algorithms and Data Structures Projects in order to get the certification from [FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)
