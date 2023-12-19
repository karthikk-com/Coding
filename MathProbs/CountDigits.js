/* 
Given an integer N, write a program to count the number of digits in N.
Input: N = 12345
Output: 5
Explanation: N has 5 digits
*/

/*
Edge case : Octa Literals does not support i.e passing 012322 will not return the expected output.
Edge Case : CHeck if the passed input is a valid number.
use typeof(inputValue) -> to check if the input is a number.
use Number.isInteger()  -> ES6 Built in to check if the input is a integer and not contain any decimal value.

Inference :
Solve by using extraction of digits using division and looping the floor value 
Using extraction of digit method, we remove the last digit by dividing the input number by 10 and remove the decimal value until the input reaches 0
Also, make use of a counter at each iteration to know the number of digits.
*/

function countTheDigit(n){
    if(Number.isInteger(n)){
        let counter = 0;
        let x =n;
        
        while(x>0){
            x=Math.floor(x/10); // you can also use -> x = parseInt(x/10);
            counter++;
        }
        return counter;
    }
    return "Not a number"
          
}

console.log(countTheDigit(1232));

/* Another method using Logirithmic */
function countTheDigitByUsingLog(n){
    if(Number.isInteger(n)){
        return parseInt(Math.log10(n)+1);
    }

    return "Not a number"
}

console.log(countTheDigitByUsingLog(12342))

/* Time Complexity 

O(log10(N)) - Since we divide by 10 each time.

If the division is by 10 -> then it is log base 10 (N)
If the division is by 2 - > then it is log base 2 (N)
NOTE: Whenever you write a logic, with the number of iterations depending on division(i.e by dividing the number), then the time complexity will be logirithmic always.
*/