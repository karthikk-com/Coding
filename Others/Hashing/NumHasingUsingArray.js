/*  input [1,2,4,2,1,3]
output :
1 : 2
2 : 2
3 : 1
4 : 1
hash map functionality using arrays
 */

/* Array can hold a size upto 10^6 inside main & 10^7 globally */
function showFrequency(arr,n){
    let newArr=[];
    for(let ar of arr){
        newArr[ar]=(newArr[ar]!=undefined) ? ++newArr[ar] : 1;
    }

    return newArr[n]!=undefined ? newArr[n]:0;
}

console.log(showFrequency(([1,2,4,2,1,3,2,68]),69));


