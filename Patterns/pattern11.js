/* 
Pattern 11
N=6

1
01
101
0101
10101
010101

*/

/* Approach:
    N=6

    Infering from the output
    Number of rows = 6 (outer loop)

    odd rows starts from 1 
    even rows starts from 0
*/

function printPattern(n){
    let start = 1;

    for(let i=0; i<n; i++){
        start = (i%2===0) ? 1: 0;
        for(let j=0; j<=i; j++){
            process.stdout.write(start+'');
            start = 1 - start;
        }
        process.stdout.write('\n');
    }
}

printPattern(6);