/* Pattern 21

Input Format: N = 3
Result: 
***
* *
***

*/

/* Inference

n=3
Rows =3 ; Outerloop is 3 -> n
Column = 3 ; Innerloop is 3 -> n

Print start at the boundaries
whenever row=0, n print star
whenever column = 0,n print star
*/

function printPattern(n){
    for(let i=1; i<=n; i++){
        for(let j=1;j<=n; j++){
            if(i===1 || i===n || j===1 || j===n ){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

printPattern(3);