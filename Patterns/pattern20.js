/* Pattern 20

N = 3
Result: 
*    *
**  **
******
**  **
*    *

*/
/* Inference :
n=3
row =5 -> 2*n-1
column = 6 -> 2*n

[Star,Space,Star]
[1,4,1]
[2,2,2]
[3,0,3]
[2,2,2]
[1,4,1]

Identify the breakpoint, as it as symentry
Define counterVariables to increment and decrement based on the break point.
*/

function printPattern(n){
    let starCounter=1, spaceCounter=2*n-2;
    for(let i=1; i<=2*n-1; i++){
        //Star
        for(let j=1; j<=starCounter; j++)
        process.stdout.write("*");

        //Space
        for(let k=1; k<=spaceCounter; k++)
        process.stdout.write(" ");

        //Star
        for(let l=1; l<=starCounter; l++)
        process.stdout.write("*");

        if(i<n){
            starCounter++;
            spaceCounter -=2;
        }else{
            starCounter--;
            spaceCounter+=2;

        }

        process.stdout.write("\n");
    }
}

printPattern(3);