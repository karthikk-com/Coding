/**
 * Pattern 4
 * 1
 * 22
 * 333
 * 4444
 * 55555
 */

function printPattern(n){
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(i+"");
        }

        process.stdout.write('\n');
    }
}

printPattern(4);