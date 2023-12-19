/* 
    Reverse A String
    Input   : "hi how are you" 
    Output  : "uoy era woh ih"
*/

function reverseAString(str) {
    const backward = [];
   
    for(let i = str.length-1; i >= 0; i--)
        backward.push(str[i]);

    return backward.join('');
}

console.log(reverseAString('hi how are you')); //uoy era woh i

/*  LeetCode : 344
    Write a function that reverses a string. The input string is given as an array of characters s.
    You must do this by modifying the input array in-place with O(1) extra memory.
    
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

    Hint : 2 Pointer Approach
*/

function reverseAStringModifyingInputArr(s) {
    for(let i = 0; i < s.length/2; i++){
        let temp = s[i];
        s[i] = s[(s.length - 1) -i];
        s[(s.length - 1) -i] = temp;
    }

    return s;
}
console.log(reverseAStringModifyingInputArr(["H","a","n","n","a","h"])); //[ 'h', 'a', 'n', 'n', 'a', 'H' ]