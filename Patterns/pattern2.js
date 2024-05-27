/**
 * Pattern 2
 * *
 * **
 * ***
 * ****
 * *****
 */


function printPattern(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }
}

//0(n^2)
function printPattern2(n){
    for(let i=0;i<n;i++){
        for(let j=0; j<=i;j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}

//o(n)
function printPattern3(n){
    temp = "";
    for(let i=0 ; i<n ; i++){
        temp +="*"
        process.stdout.write(temp+"\n")
    }

}
printPattern(15);
printPattern2(20);
printPattern3(10);