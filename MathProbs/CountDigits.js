/* 
Given an integer N, write a program to count the number of digits in N.
Input: N = 12345
Output: 5
Explanation: N has 5 digits
*/

/* Inference :
Solve by using extraction of digits using division and looping the floor value */
function countTheDigit(n){
    let counter = 0;
    let x =n;

    while(x>0){
        x=Math.floor(x/10);
        counter++;
    }

    return counter;
}

console.log(countTheDigit(1232));