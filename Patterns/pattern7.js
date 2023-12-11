/**
 * Pattern 7
 * 
 *        *   
 *       ***  
 *      *****
 *     *******
 * 
 * 4 rows
 * 7 cols
 * 
 * [3Space,1star,3Space]
 * [2Space,3Star,2Space]
 * [1Space,5Star,1Space]
 * [0Space,7Star,0Space]
 */

function printPattern(n){
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n-i; j++){
            process.stdout.write(" ");
        }

        for(let j=1; j<=(i*2)-1; j++){
            process.stdout.write("*");
        }

        for(let k=1; k<=n-i; k++){
            process.stdout.write(" ");
        }

        process.stdout.write('\n')
    }

}


printPattern(5);