/* 
Print from 1 to N using recursion back tracking

i.e Executing the last function call, and decreamenting to first function call
*/

function PrintFrom1ToNBacktrack(i,n){
    //base case
    if(i<1)
        return;

    PrintFrom1ToNBacktrack(i-1,n);
    process.stdout.write(i +" ");
}

PrintFrom1ToNBacktrack(3,3);

