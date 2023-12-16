/* Pattern 18

N=3

C
B C
A B C

*/

/* Inference
Row =3 -> Outerloop will be 3

ASCII code A=65
Since the patter starts in revers order,
ie. C  = 67 (Ascii Code)
StartChar = 65+N-i = 67
*/


function printPattern(n){
    for(let i=1; i<=n; i++){
        let startChar = 65+n-i;

        for(let j=1; j<=i; j++){
            process.stdout.write(String.fromCharCode(startChar)+" ");
            startChar++;
        }

        process.stdout.write("\n");
    }
}

printPattern(3);