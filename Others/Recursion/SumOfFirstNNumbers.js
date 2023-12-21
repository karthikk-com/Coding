/* Print the sum of first N numbers
Input : 3
Output : 6
i.e 1+2+3 = 6 */

//Parameter way of execution
function printSum(i,sum){
    //baseStatement
    if(i<1)
        return process.stdout.write(sum+"\n");

    printSum(i-1,sum+i)
}


console.log(printSum(3,0));

//Functional way execution ie. want the function to return something
function printSum2(n){
    if(n<1)
        return 0;

    return n + printSum2(n-1);
}

console.log(printSum2(3));