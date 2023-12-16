/* Pattern 15
Input Format: N = 3
Result: 
A B C
A B
A

ASCII code for "A" is 65 (Uppercase is between 65-90)
ASCII code for 'a' is 97 (lowercase is between 97-122)

String.fromCharCode(<ASCII number>) - inbuilt method to reterieve the character associated with the ASCII Number
*/

/* Inference
Number of rows = 3 (Outer loop)

Decrementing

*/


function printPattern(n){
    for(let i=0; i<n; i++){
        let asciiStartPoint=65;
        let asciiEndPoint=65+n-i;

        for(let j=asciiStartPoint; j<asciiEndPoint; j++){
            process.stdout.write(String.fromCharCode(j)+" ");
        }
        process.stdout.write('\n');
    }
}

printPattern(3);