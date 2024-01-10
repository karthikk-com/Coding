/* 
Find the nth fibonacci Number .

Fibonacci Number : In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
Index  : 0, 1, 2, 3, 4, 5, 6,  7,  8 , 9, 10, 11,  12..
Series : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144..

Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted F(n) . The sequence commonly starts from 0 and 1
F{n}=F{n-1}+F{n-2} for n > 1

 */

//Iterative Approach
//O(n) - Linear
function findNthFibonacciNumber(n){
    if (n <= 1) return n;
    let first = 0, next = 1, sum = 0;
    
    for (let i = 2; i <= n; i++) {
      sum = first + next;
      first = next;
      next = sum;
    }

return sum;
}

console.log(findNthFibonacciNumber(6));


//Recursive Approach
//O(2^n) - Exponential
function findNthFibonacciNumber2(n){
    if(n<=1)
        return n;
    
   return findNthFibonacciNumber2(n-1) + findNthFibonacciNumber2(n-2);
}

console.log(findNthFibonacciNumber2(6));