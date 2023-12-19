/* 
An Armstrong number is a special kind of number in math. It's a number that equals the sum of its digits, each raised to a power (number of digit). 
For example, if you have a number like 153, it's an Armstrong number because 1^3 + 5^3 + 3^3 equals 153
*/


/*  
For a given 3 digit number, find whether it is armstrong number or not. An Armstrong number of three digits is an integer 
such that the sum of the cubes of its digits is equal to the number itself. Return "Yes" if it is a armstrong number else return "No".
NOTE: 371 is an Armstrong number since 33 + 73 + 13 = 371

Input: N = 153
Output: "Yes"
Explanation: 153 is an Armstrong number
since 1^3 + 5^3 + 3^3 = 153.

GeeksForGeek.org : https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1
*/

function isArmstrongNum(num){
    let originalInput = num
    let powerVal = parseInt(Math.log10(num)+1);
    let armstrongNum = 0;
    while(num>0){
        let lastDigit = num%10;
        num=parseInt(num/10);
        armstrongNum += Math.pow(lastDigit,powerVal);
    }

    return armstrongNum===originalInput;
}

console.log(isArmstrongNum(153));
console.log(isArmstrongNum(1634));