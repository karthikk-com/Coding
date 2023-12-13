/*   
Pattern 9 
    *   
   ***  
  *****
 *******
 *******
  ***** 
   *** 
    * 

Note : The 6th and 7th line are same length.
*/


function printTopPyramid(n){
    for(let i=0; i<n; i++){
        //Space
        for(let j=0; j<n-(i+1); j++){
            process.stdout.write(" ");
        }

        //Star
        for(let j=0;j<(i*2)+1;j++){
            process.stdout.write("*");
        }

        //Space
        for(let j=0; j<n-(i+1); j++){
            process.stdout.write(" ");
        }
        process.stdout.write("\n");
    }
}

function printBottomPyramid(n){
    for(let i=0; i<n; i++){
        //Space
        for(let j=0; j<i;j++){
            process.stdout.write(" ");
        }

        //Star
        for(let j=0; j<2*n-(2*i+1);j++){
            process.stdout.write("*");
        }

        //Space
        for(let j=0; j<i;j++){
            process.stdout.write(" ");
        }

        process.stdout.write("\n");
    }
    
}

function printPattern(n){
    printTopPyramid(n);
    printBottomPyramid(n);
}


printPattern(10);