/**
 * Pattern 7
 *      *******
 *       *****
 *        ***  
 *         *   
 *
 * 4 rows
 * 7 cols
 * 
 * [0Space,7Star,0Space]
 * [1Space,5Star,1Space]
 * [2Space,3Star,2Space]
 * [3Space,1star,3Space]
 * 
 * 8 - 1 = 7   (0 index)
 * 8 - 3 = 5   (1 index)
 * 8 - 5 = 3   (2 index)
 * 8 - 7 = 1   (3 index)
 * 
 */

function printPattern(n){
    for(let i=0; i<n; i++){
        //Space
        for(let j=0; j<i; j++){
            process.stdout.write(" ");
        }

        //star
        for(let k=0; k < ((2*n)-(2*i+1)); k++){
            process.stdout.write("*");
        }
        
        //Space
        for(let j=0; j<i; j++){
            process.stdout.write(" ");
        }
        process.stdout.write('\n');
    }
}

printPattern(12);