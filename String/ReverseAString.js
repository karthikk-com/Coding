/* https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */

function reverseString(s){
    let mid = Math.floor(s.length/2);
    let n = s.length;
    console.log(n,mid);

    let i=0;

    while(i<mid){
        console.log(s[i],s[n-i-1]);
        let temp = s[i];
        s[i]=s[n-i-1];
        s[n-i-1]=temp;
        i++;
    }
    return s;
}

console.log(reverseString(["h","e","l","l","o"]));
//console.log(reverseString(["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]))

// Using Recursion
function recursiveReverseString(i,str){
    // Base condition
    let n = str.length;
    if(i>=Math.floor(n/2))
        return str;

    [str[i],str[n-i-1]] = [str[n-i-1], str[i]];
    return recursiveReverseString(i+1,str);
}

console.log(recursiveReverseString(0,["h","e","l","l"]));