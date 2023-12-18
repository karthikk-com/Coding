/* Pattern 22

Input Format: N = 3
Result: 
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3

*/

/* 
N=3

Use 2d matrix technique
Row = 2*n -1
column = 2*n-1

*/

function printPattern(n){
    for(let i=0; i<2*n-1; i++){
        for(let j=0; j<2*n-1; j++){
            let top = i;
            let left = j;
            let right = (2*n-2)-j;
            let bottom = (2*n-2)-i; 
            
            process.stdout.write((n-Math.min(top,left,right,bottom))+" ");

            // console.log(i,j);
            // console.log(top,left,right,bottom);
        }
        process.stdout.write("\n");
    }
}

printPattern(3);

// todo : Need to understand why the actual matrix is being converted.
// todo : The above solution works, but need to understand more on the logic
