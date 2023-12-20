/* 
Print linearly from N to 1
Input : 4
Output : 4,3,2,1
 */

function printFromNto1(N){
    if(N===0)
        return;

    process.stdout.write(N+" ");
    printFromNto1(--N);
}

printFromNto1(4);