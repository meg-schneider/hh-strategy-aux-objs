/*
  Given an arbitrary number of arrays, return a new array
  representing the union of the arrays.
  Do this in O(n) time.

  Example:

  union([1, 3, 7], [2, 3, 9], [9, 13]) ->
  [1, 3, 7, 2, 9, 13]

  union([4, 3]) ->
  [4, 3]

  union([6, 7, 8], [7, 8, 9]) ->
  [6, 7, 8, 9]

*/










// Naive approach

function union1(...arrays) {
  // output array
  const output = [];

  // iterate through the argument arrays
  for (let array of arrays) {
    // for each arg array, iterate through the elements
    for (let element of array) {
      // for each element, check whether already exists in output
      if (!output.includes(element)) {
        // push in if it does not exist
        output.push(element);
      }
    }
  }

  return output;
}







// Using Set

function union2(...arrays) {
  // set of unique values
  const unique = new Set();

  for (let array of arrays) {
    for (let element of array) {
      // .add method on set will not add duplicates
      unique.add(element);
    }
  }

  return [...unique];
}

console.log(union2([1, 3, 7], [2, 3, 9], [9, 13]));