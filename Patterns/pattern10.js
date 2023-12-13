/* 
Pattern 10

n=4

*
**
***
****
***
**
*

Note : Identify the symentry. Meaning the 7th and 8th row are not the same. It is not the exact same as the top triangle
*/


/* Approch :
Till the n the * is equal to iteration number 
after which it decrements from there*/


function printPattern(n){
    for(let i=1; i<=2*n-1; i++){
        let star = i;
        if(star<=n){
            for(let j=1; j<=i; j++){
                process.stdout.write("*");
            }
        }else{
            for(let j=1; j<=2*n-i; j++){
                process.stdout.write("*");
            }
        }

        process.stdout.write("\n");
    }
}

//More readable
function printPatternOptimized(n){
    for(let i=1; i<=2*n-1; i++){
        let star = i;
        if(i>n) star = 2*n-i;
        
        for(let j=1; j<=star; j++){
            process.stdout.write("*");
        }
       rocess.stdout.write("\n"); p
    }
}

printPattern(5)
printPatternOptimized(6);