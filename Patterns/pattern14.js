/* 
Pattern 14
Input Format: N = 3
Result: 
A
A B
A B C


ASCII code for "A" is 65 (Uppercase is between 65-90)
ASCII code for 'a' is 97 (lowercase is between 97-122)

String.fromCharCode(<ASCII number>) - inbuilt method to reterieve the character associated with the ASCII Number

*/

function printPattern(n){
    for(let i=1; i<=n; i++){
        let asciiStartPoint=65+i;
        for (let j=65; j<asciiStartPoint; j++){
            process.stdout.write(String.fromCharCode(j)+" ");
        }
        process.stdout.write('\n');
    }
}

printPattern(5);