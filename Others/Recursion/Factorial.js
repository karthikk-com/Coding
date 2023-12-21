/* 
Print the factorial of a number using recursion
*/

//function way of implementation
function printFactorial(n){
    if(n<1)
        return 1;

    return n*printFactorial(n-1);
}


console.log(printFactorial(4));

//Parameter way of implementation
function printFactorial2(n, mul){
    if(n<1)
        return console.log(mul);

    printFactorial2(n-1, mul*n);
}

printFactorial2(4,1);

