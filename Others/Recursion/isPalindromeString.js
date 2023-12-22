/* 
Check if the string is a palindrome

Input : MADAM
Output : true

Input : MADIM
Output : false
*/

function isPalindromeString(str, i, len){
    //Base Condition
    if(i>=parseInt(len/2))
        return true;

    //Task of the recursion 
    if(str.charAt(i) !== str.charAt(len-i-1))
        return false

    return isPalindromeString(str,i+1,len);
}

console.log(isPalindromeString("MADIM",0,5));


