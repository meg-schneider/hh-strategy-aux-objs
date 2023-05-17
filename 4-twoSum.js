/*
  Given an array of integers and a target integer,
  return true if a pair of integers exist in the array that add up 
  to the target.

  Return false otherwise.

  Example:
  twoSum([2, 4, 5], 9) -> true
  twoSum([2, 4, 5], 8) -> false
  twoSum([5, -1, -2, 3], 1) -> true

*/

















// Naive appraoch - O(n^2)

function twoSum1(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // for every integer of the array
    for (let j = i + 1; j < arr.length; j++) {
      // go through every integer after it and check the sum
      if (arr[i] + arr[j] === target) return true;
    }
  }

  return false;
}









// Using set - O(n)

function twoSum2(arr, target) {
  // set to store difference of target and element
  const diffs = new Set();

  // iterate through array
  for (let element of arr) {
    // current element exists in diffs, we saw its complement before
    if (diffs.has(element)) return true;
    // otherwise add the complement to the diffs
    else diffs.add(target - element);
  }

  // target sum not found
  return false;
}








// TESTS

const testArr = [];
for (let i = 0; i < 10000; i++) {
  testArr.push(i);
}

console.time('twoSum1');
console.log(twoSum1(testArr, -1)); // -> false;
console.timeEnd('twoSum1');

console.time('twoSum2');
console.log(twoSum2(testArr, -1)); // -> false;
console.timeEnd('twoSum2');
