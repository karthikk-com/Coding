/**
 *  Pattern 1
 *  ****
 *  ****
 *  ****
 *  ****
 */

function printPattern(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n ; j++){
            process.stdout.write('*'); // Did not use console.log("*"), to cut down the trailling space.
        }
        process.stdout.write('\n');
    }
}

printPattern(4);