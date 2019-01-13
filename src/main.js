/* main.js */

/* Palindrome Checker */
const palindrome = str => {
  const result = document.getElementById("result");
  const isPalindrome = "This is a palidrome";
  const notPalindrome = "This is not a palindrome";
  const regex = /[\W_]/g;
  const arr = str.toLowerCase().replace(regex, '').split('');
  const arrReverse = arr.slice();
  if (arr.join('') === arrReverse.reverse().join('')) {
    return result.innerHTML = isPalindrome;
  }
  return result.innerHTML = notPalindrome;
}

// console.log(palindrome('Aromate et Amora'));
// // true

// console.log(palindrome('Un bon snob nu'));
// // true

// console.log(palindrome('E!y?e'));
// // true

// console.log(palindrome('hello'));
// // false