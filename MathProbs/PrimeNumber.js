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

/* We learnt that we can detect all the factors just by squareroot of (N) in print all divisors problem*/
//O(√n)
function isPrime2(n){
    let counter = 0;

    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i===0){
            counter++;
            if(n/i != i)
                counter++;
        }
    }

    return (counter === 2);
}

console.log(isPrime2(11));
console.log(isPrime2(8));