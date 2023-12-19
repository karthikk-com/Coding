/* 

LeetCode : 9 
https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is a palindrome, and false otherwise.

Input: x = 121
Output: true

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome

Constraints: -231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?
 */

function isPalindromeNumber(x){
    let inputVal = x;
    let reverseNumber = 0;

    while (inputVal > 0){ // Here the constraint is, if negative then it should return false
        let lastDigit = inputVal%10;
        inputVal = parseInt(inputVal/10);
        reverseNumber = (reverseNumber*10) + lastDigit;
    }

    return (reverseNumber === x)
}

console.log(isPalindromeNumber(-121));