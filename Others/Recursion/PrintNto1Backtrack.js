/* 
Print linearly from N to 1 using recursion back tracking
i.e Executing the last function call, and decreamenting to first function call
Input : 4
Output : 4,3,2,1
 */

function PrintFromNto1Backtrack(i,n){
    if(i>n)
        return;

    PrintFromNto1Backtrack(i+1,n);
    process.stdout.write(i+" ");
}

PrintFromNto1Backtrack(1,4);