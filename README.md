# Synopsis

This is a simple web application that checks if a word is a palindrome.

A [palindrome](https://en.wikipedia.org/wiki/Palindrome) is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.

My program will ignore any punctuation, case, and spacing.

I used ECMAScript 6 JS.
For main.js source file, navigate to ./src/main.js  

## Code Explanation
I created a function called 'palindrome' that takes one string argument.
```javascript
const palindrome = str => {};
```
I then create several constants
```javascript
// the element where the output will be display on my html page
const result = document.getElementById("result"); 

// The string which will be display if it is a palindrome
const isPalindrome = "This is a palidrome";

// The string which will be display if it is not a palindrome
const notPalindrome = "This is not a palindrome";

```
Then, I used *regular expressions (regex)* to replace any white space or non-alphanumeric characters with nothing (or null), which essentially removes them from the string. I store that regex within a constant
```javascript
const regex = /[\W_]/g;
```
I used *String.prototype.toLowerCase()* to remove any capital letters because A is a different character than a. Then I used *String.prototype.replace()* replace all present regex by an empty string and I split my string into an array using *String.prototype.split(). 
```javascript
const arr = str.toLowerCase().replace(regex, '').split('');
```
I then created a copy of the array using *Array.prototype.slice()* and stored within a variable. 
```javascript
const arrReverse = arr.slice();
```
Finally I transform my array back into a string and I compare the current string with the reverse array using a mix of *Array.prototype.join()* and *Array.prototype.reverse()* which will return a boolean. If true, I display isPalindrome, otherwise notPalindrome. 
```javascript
if (arr.join('') === arrReverse.reverse().join('')) {
    return result.innerHTML = isPalindrome;
  }
  return result.innerHTML = notPalindrome;
```

**Relevant Links**
1. [regex](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)
2. [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
3. [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
4. [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
5. [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
6. [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
7. [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)


## Usage example

See a live version - https://alexdisdier.github.io/palindrome-checker/

## Directory Structure

```bash

├── Palindrome
│   ├── src
│   │   ├── main.js
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
│   ├── .gitattributes   ##Forces the web app language to js
└── ├── index.html
    └──  README.md
```

## Built With

* html
* css
* JavaScript

## Authors

**Alex Disdier** - *Initial work* - [alexdisdier](https://github.com/alexdisdier)

## Acknowledgments

This is part of JavaScript Algorithms and Data Structures Projects in order to get the certification from [FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)
