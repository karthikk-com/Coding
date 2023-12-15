/* Pattern 16
Input Format: N = 3
Result: 
A
B B
C C C
*/

/* Analyse
row = 3 (Outer loop)

Incrementing
*/

function printPattern(n){
    for(let i=0; i<n; i++){
        let asciiToPrint=65+i;

       for(let j=1; j<=i+1; j++){
        process.stdout.write(String.fromCharCode(asciiToPrint)+ " ");
       }
        process.stdout.write("\n")
    }
}

printPattern(3);