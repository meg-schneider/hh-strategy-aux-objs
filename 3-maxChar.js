/*
  Given a string, return the character that has the maximum frequency.
  If multiple characters occur the max number of times,
  return the character that occurs first in the string.
  
  Example:

  maxChar('good morning') -> 'o'
  maxChar('abbcc') -> 'b'

*/




function maxChar1(str) {
  // empty object to store characters and occurrences
  const countObj = {};

  // loop through characters of the string
  for (const char of str) {
    // if there is no key with character, instantiate to 0
    if (countObj[char] === undefined) countObj[char] = 0;
    // increment the count
    countObj[char]++;
  }

  // find the max occurring character
  let maxCharCandidate;
  let maxFreq = 0;

  for (const [char, freq] of Object.entries(countObj)) {
    if (maxCharCandidate === undefined || freq > maxFreq) {
      maxCharCandidate = char;
      maxFreq = freq
    }
  }

  return maxCharCandidate;
}



// TEST
console.log(maxChar1('good morning')); // -> 'o'
console.log(maxChar1('abbcc')); // -> 'b'
console.log(maxChar1('abccb11')); // -> 'b'











const obj = {
  A: 'A',
  B: 'B',
  10: 10,
  1: 1
}

// console.log(obj);






// Using map to preserve order even with number characters

function maxChar2(str) {
  // start an emtpy map
  const charMap = new Map();

  // iterate through string
  for (const char of str) {
    // if char doesn't exist in map yet, instantiate
    if (!charMap.has(char)) charMap.set(char, 0);
    charMap.set(char, charMap.get(char) + 1);
  }

  // find the max occurring character
  let maxCharCandidate;
  let maxFreq = 0;

  for (const [char, freq] of charMap.entries()) {
    if (maxCharCandidate === undefined || freq > maxFreq) {
      maxCharCandidate = char;
      maxFreq = freq
    }
  }

  return maxCharCandidate;
}


// TEST
// console.log(maxChar2('good morning')); // -> 'o'
// console.log(maxChar2('abbcc')); // -> 'b'
// console.log(maxChar2('abccb11')); // -> 'b'