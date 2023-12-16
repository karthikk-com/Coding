/* Pattern 17
Input Format: N = 3
Result: 
  A  
 ABA 
ABCBA
*/

/* Inference:

row = 3 (Outerloop will be 3)
column = 5  i.e 2*n-1 

format : [Space, Characeter, Space]

[2,1,2]
[1,3,1]
[0,5,0]

Breakpoint 
if inner Iteration of character < outer loop iteration number -> Increment the character , after that decrement the character

*/


function printPattern17(n){

    
    for(let i=1; i<=n; i++){
        let startChar=65;
        //Space
        for(let j=1; j<=n-i; j++){
            process.stdout.write(" ");
        }

        //Character
        for(let k=1; k<=2*i-1; k++){
            process.stdout.write(String.fromCharCode(startChar));
            k<i ? startChar++ : startChar--;
        }
        //Space
        for(let l=0; l<=n-i; l++){
            process.stdout.write(" ");
        }

        process.stdout.write("\n");
    }
}

printPattern17(3);