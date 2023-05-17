/** returns the nth fibonacci number. A Fibonnaci sequence is a list 
 * of numbers that begin with 0 and 1, and each subsequent number is 
 * the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you 
 * repeating the same function call with the same arguments 
 * frequently? Are you able to compute nthFibonacci(1000)? If not, 
 * recursive algorithms can be made MUCH more efficient 
 * using memoization. Try memoizing each result from nthFibonacci 
 * and see the performance difference.
 */


function nthFibonacci(n) {
  if (n <= 1) return n;
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}










function auxFib(n, aux = {0: 0, 1: 1}) {
  if (aux.hasOwnProperty(n)) return aux[n];
  return aux[n] = auxFib(n - 1, aux) + auxFib(n - 2, aux);
}












console.time('nthFibonacci');
console.log(nthFibonacci(45));
console.timeEnd('nthFibonacci');


console.time('auxFib');
console.log(auxFib(45));
console.timeEnd('auxFib');

