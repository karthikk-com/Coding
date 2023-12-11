/**
 * Pattern 5
 * 
 * *****
 * ****
 * ***
 * **
 * *
 */

function printPattern(n){
    for(let i=1; i<=n; i++){
        for(let j=0; j<=n-i; j++){
            process.stdout.write("*");
        }

        process.stdout.write('\n');
    }
}

printPattern(10);