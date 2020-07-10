/*
JavaScript Algorithms and Data Structures Masterclass

fib
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.  Recall that the Fibonacci sequence is the sequence of whole numbers 1, 2, 3, 4, 5, 6, ... which start with 1, and where every nuber thereafter is equal to the sum of the previous two numbers.
*/

const fib = (num) => {
  let counter = 3;
  let num1 = 1;
  let num2 = 1;
  let current = 2;
  const innerFunc = (number) => {
    num1 = num2;
    num2 = current;
    current = num1 + num2;
    counter++;
    if(num === counter) {
      return current;
    } else {
      return innerFunc(num);
    }
  }
  if(num === 1 || num === 2) {
    return 1;
  } else if (num === counter) {
    return current;
  } else {
    return innerFunc(num);
  }
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465