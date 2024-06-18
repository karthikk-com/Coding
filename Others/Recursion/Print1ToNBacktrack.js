/* 
Print from 1 to N using recursion back tracking

i.e Executing the last function call, and decrementing to first function call
*/

function PrintFrom1ToNBacktrack(i){
    //base case
    if(i<1)
        return;

    PrintFrom1ToNBacktrack(i-1);
    process.stdout.write(i +" ");
}

PrintFrom1ToNBacktrack(5); // 1 2 3 4 5


function printReverse(i){
    if(i<1)
        return;
    printReverse(--i);
    process.stdout.write(i+" ");
}

printReverse(5); // 0 1 2 3 4