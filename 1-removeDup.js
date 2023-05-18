/*
  Given an array, return a new array with the duplicate 
  elements removed.
  
  Example:
  removeDuplicates([3, 1, 3, 2, 9, 1]) ->
  [3, 1, 2, 9]

*/

























// Naive approach without using auxiliary object

function removeDup1(arr) {
  // container for output array of unique elements
  const output = [];

  // loop through input arr
  for (const element of arr) {
    // if output array does not already include the array element
    if (!output.includes(element)) {
      // push into output
      output.push(element);
    }
  }

  return output;
}









// NOTE: .includes method involves an iteration of the array with O(n) time
// The above approach essentially has a loop nested within a loop, making it O(n^2)















// Better approach using a set

function removeDup2(arr) {
  // initialize an empty set to store seen elements
  const seen = new Set();

  // initialize an output array to contain unique elements
  const output = [];

  // loop through input array
  for (const element of arr) {
    if (!seen.has(element)) {
      seen.add(element);
      output.push(element);
    }
  }
  return output;
}



// .has is O(1) aka constant time lookup 
// But we seem to be adding to the set and the output array twice.
// Can we save some space?

















function removeDup3(arr) {
  // initialize an empty set to store seen elements
  const seen = new Set();

  // iterate through input array
  for (const element of arr) {
    // a set will only keep unique elements, even if we add it multiple times
    seen.add(element);
  }
  console.log(seen);
  // spread out the set into a new array
  return [...seen];
}













// slicker shortcut since the Set constructor is able to take in iterable like an array

function removeDup4(arr) {
  return [...new Set(arr)];
}




// TESTS
// console.log(removeDup1([3, 1, 3, 2, 9, 1]));
// console.log(removeDup2([3, 1, 3, 2, 9, 1]));
console.log(removeDup3([3, 1, 3, 2, 9, 1]));
console.log(removeDup4([3, 1, 3, 2, 9, 1]));

