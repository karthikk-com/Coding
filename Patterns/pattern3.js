/**
 * Pattern 3
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

function printPattern(n){
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(j+''); // As this prints only strings.
        }
        process.stdout.write('\n');
    }
}

printPattern(5)