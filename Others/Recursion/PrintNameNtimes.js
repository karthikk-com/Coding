/* Print Name for N times using recursion */

function printName(i,N){
   if(i>N)
    return;

   console.log(i,"Recursion");
   printName(++i, N);
}

printName(1,5);