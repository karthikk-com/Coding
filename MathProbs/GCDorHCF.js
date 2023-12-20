/* 
GCD - Greatest Common Divisor
HCF - Highest Common Factor

Input
N1 =9; N2 = 12 
Factors of 9 -> 1,3,9
Factors of 12 ->1,2,3,4,6,12

Common Factors = 1,3
GCD | HCF -> 3

Output : 3

Note : There will always be a GCD or HCF. That is 1.


euclidean algorithm
GCD(a,b) = GCD(a-b, b) (where  -> a>b)
GCD(20,15) = GCD(5,15)
GCD(15,5) = GCD(10,5)
GCD(10,5) = GCD(5,5)
GCD(5,5) = GCD(0,5)

*/

//BruteForce Method
function findGCD(n1,n2){
    let gcd = 1;

    for(let i=1; i<=Math.min(n1,n2); i++){
        if(n1%i ===0 && n2%i===0)
            gcd = i;
    }
    return gcd;
}

console.log(findGCD(9,12));

//Euclidean Algorithm
// GCD(a,b) = GCD(a-b, b) (where  -> a>b) using only division
function findGCD2(n1,n2){
    let gcd = 1;

    while(n1>0 && n2>0){
        if(n1>=n2){
            n1=n1-n2;
        }else{ 
            n2=n2-n1;
        }

        if(n1===0) gcd=n2;
        if(n2===0) gcd=n1;
    }

    return gcd;
}
console.log(findGCD2(20,15));

//Euclidean Algorithm with optimized to reduce more iteration
// GCD(a,b) = GCD(a-b, b) (where  -> a>b) Using modulo
//O(log ϕ (min(n1,n2)))  (Using ϕ -> as the divisor is variable here and therfore here it is not log base 10) 

function findGCD3(n1, n2){
    while (n1>0 && n2>0){
        if(n1>=n2) 
            n1 = n1%n2;
        else
            n2= n2%n1;
    }

    if(n1 === 0) 
        return n2;
    
    return n1
}

console.log(findGCD3(20,15));