
var rightRotate = function(numArr, k) {
    let l = numArr.length;

    //storing in temp variable
    let tempArr = [];
    for(let i=l-k; i<l; i++){
        tempArr[i-(l-k)]=numArr[i];
    }

    //Shifiting
    for(let i=l-1;i>=k; i--){
        numArr[i]=numArr[i-k];
    }

    //adding temp
    for(let i=0;i<k;i++){
        numArr[i]=tempArr[i];
    }
        return numArr;
}

console.log(rightRotate([1,2,3,4,5,4],2)); // [ 5, 4, 1, 2, 3, 4 ]
console.log(rightRotate([-1,-100,3,99],2)) // [ 3, 99, -1, -100 ]