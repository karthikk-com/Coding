/* 
Print all Divisors of an integer N
Input : N=36
Output : 1,2,3,4,6,9,12,18,36

*/

/* Inference :
Starting from "0" we need to iterate till the N.
If the number get completely divisible, then it is a divisor of the N

TimeComplexity - O(N)

Another Method:
TimeComplexity - O(sqrt(N))
On observing the output:
1 * 36 (n/1)
2 * 18 (n/2)
3 * 12 (n/3)
4 * 9 (n/4)
6 * 6 (n/6)  - > Sqrt(n)
--------
9 * 4 (n/9)
12 * 3 (n/12)
18 * 2 (n/18)
36 * 1 (n/36)
 */

function printDivisor(N){
    for(let i=1; i<=N; i++){
        if(N%i===0) process.stdout.write(i+" ");
    }
    process.stdout.write("\n");
}



function printDivisor2(N){
    for(let i=1; i<=Math.sqrt(N); i++){
        if(N%i===0){
            process.stdout.write(i+" ");
            if(N/i != i)
                process.stdout.write((N/i)+" ");
        }
    }
}

printDivisor(10);
printDivisor2(36);