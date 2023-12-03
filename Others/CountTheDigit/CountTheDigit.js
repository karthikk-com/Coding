// Input : 12322
// output : 5
// Edge case : Octa Literals does not support i.e passing 012322 will not return the expected output.

/** Edge Case : CHeck if the passed input is a valid number
 *  use typeof(inputValue) -> to check if the input is a number.
 *  use Number.isInteger()  -> ES6 Built in to check if the input is a integer and not contain any decimal value.
 */

/**
 * Using extraction of digit method, we remove the last digit by dividing the input number by 10 and remove the decimal value until the input reaches 0
 * Also, make use of a counter at each iteration to know the number of digits.
 */



function countTheDigit(num){
    if(Number.isInteger(num)){
        let counter=0;

        while (num>0){
            num = parseInt(num/10);
            counter++;
        }
        return counter;
    }
    return "Not a number"
}

console.log(countTheDigit(2));


