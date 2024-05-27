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


function printPattern2(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n; j++){
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
}
printPattern(4);
printPattern2(5);