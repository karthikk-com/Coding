/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0

Leetcode : 7 - https://leetcode.com/problems/reverse-integer/

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

 */

class solution{
    reverseANumber(num){
        let x = num;
        let reverseNumber = 0;

        while(x!=0){ // x>0 can also be made however, this will not allow negative value to pass in.
            let lastDigit = x%10;
            x=parseInt(x/10);
            reverseNumber = (reverseNumber*10)+lastDigit;
        }

        return (reverseNumber >= Math.pow(2,31)-1  || reverseNumber <= Math.pow(-2,31)) ? 0 : reverseNumber;
    }
}

const solObj = new solution();
console.log(solObj.reverseANumber(-123));


