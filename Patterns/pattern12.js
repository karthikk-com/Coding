/* Pattern 12
N=3
1    1
12  21
123321

N=6

1          1
12        21
123      321
1234    4321
12345  54321
123456654321

*/

function printPattern(n){
    for(let i=1; i<=n; i++){
        //forwardNumber
        for(let j=1;j<=i; j++){
            process.stdout.write(j+"");
        }

        //Space
        for(let k=1; k<=(2*n)-(2*i); k++){
            process.stdout.write(" ");
        }

        //BackwordNumber
        for(let l=i; l>=1; l--){
            process.stdout.write(l+"");
        }

        process.stdout.write("\n");
    }
}

function printPattern2(n){
    let space = 2*(n-1); // here we count the space in first row and consider as the base 
    for(let i=1; i<=n; i++){
        //forwardNumber
        for(let j=1;j<=i; j++){
            process.stdout.write(j+"");
        }

        //Space
        for(let k=1; k<=space; k++){
            process.stdout.write(" ");
        }

         //BackwordNumber
         for(let l=i; l>=1; l--){
            process.stdout.write(l+"");
        }

        process.stdout.write("\n");
        space -= 2;

    }

}

printPattern(6);
printPattern2(6);
