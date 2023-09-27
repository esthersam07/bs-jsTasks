function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
  }
let inputString = 'webmaster';
let sortedString = sortStringAlphabetically(inputString);
console.log(sortedString); // Output: 'abeemrstw'
    