/* Pattern19

N = 6
Result:   
************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************

*/

/* Inference:

Row=12 -> N*2 -> Outerloop
Identified a symmentary, Hence breaking into 2 section, N/2 => N=6

First half: 
[Star, Space, Star]
[6,0,6]
[5,2,5]
[4,4,4]
[3,6,3]
[2,8,2]
[1,10,1]

Stars get decremented by 1
Space get incremented by 2

Second Half:
[Star, Space, Star]
[1,10,1]
[2,8,2]
[3,6,3]
[4,4,4]
[5,2,5]
[6,0,6]
*/

function printPattern(n){
    //first-half
    for(let i=0; i<n; i++){
        //Star
        for(let j=0; j<n-i; j++){
            process.stdout.write("*");
        }

        //Space
        for(let k=0; k<2*i; k++){
            process.stdout.write(" ");
        }

        //Star
        for(let j=0; j<n-i; j++){
            process.stdout.write("*");
        }

        process.stdout.write("\n");
    }

    //second-half
    for(let i=1; i<=n; i++){
        //Star
        for(let j=1; j<=i; j++)
            process.stdout.write("*");

        //Space
        for(let k=1; k<= 2*n - 2*i; k++)
            process.stdout.write(" ");
        
        //Star
        for(let j=1; j<=i; j++)
            process.stdout.write("*");
        
        process.stdout.write("\n");
    }
}

printPattern(6);