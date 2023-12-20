/* 
PrimeNumber :
A Number that is exactly divisible by 2 factors - 1 & the number itself.

Input : 11
Output : true

Input : 4
Output : false
*/


//O(n) - brute force approach
function isPrime(n){
    let counter=0;
    for(let i=1; i<=n; i++){
        if(n%i === 0)
            counter++;
    }

   return counter===2; 
}

console.log(isPrime(4));

