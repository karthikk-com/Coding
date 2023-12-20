/* 
Print linearly from 1 - N

Input:
N = 4
Output : 1 2 3 4
*/

function printFrom1ToN(i,N){
    if(i>N)
        return;

    process.stdout.write(i +" ");
    printFrom1ToN(++i, N)
}

printFrom1ToN(1, 4);