/*
The kth Factor of n

Leetcode : 1492. 
https://leetcode.com/problems/the-kth-factor-of-n/?envType=study-plan-v2&envId=amazon-spring-23-high-frequency 
You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.
Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

Example 1:
Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

Example 2:
Input: n = 7, k = 2
Output: 7
Explanation: Factors list is [1, 7], the 2nd factor is 7.

Example 3:
Input: n = 4, k = 4
Output: -1
Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.


*/

// Brute Force Approach
var kthFactor = function (n,k){
    let factors = [];

    for(let i=1; i<=n;i++){
        if(n%i===0)
            factors.push(i);
    }

    return (factors.length >=k ) ? factors[k-1] : -1
}

console.log(kthFactor(4,4));

// Better implementation
// Since we need to return only the kth factor, we can get rid of storing the factors in an separate array.
var kthFactor2 = function (n,k){
    let count =0;
    for(let i=1;i<=n; i++){
        if(n%i===0 && ++count===k)
            return(i);
    }

    return -1;
}

console.log(kthFactor2(4,4));

// Could you solve this problem in less than O(n) complexity?

var kthFactor3 = function (n,k){
    let a =[];
    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i===0){
            a.push(i);

            if(n/i!=i)
                a.push(n/i);
        }

    }
    return (a.length>=k) ? a.sort(function(a, b){return a - b})[k-1]: -1;
}

console.log(kthFactor3(36,3))