/* 
Reverse an Array using recursion
[1,3,2,4,5]
[5,4,2,3,1]
*/

//Brute force method

//using 1 pointer and external swap function

function reverseAnArray(i, arrVal,n){
    //Basecase
    if(i>=n/2)
        return arrVal;

    //swapIndex(arrVal,i,n-i-1); 
    [arrVal[i],arrVal[n-i-1]] =[arrVal[n-i-1],arrVal[i]]
    return reverseAnArray(i+1, arrVal,n)

    
}

function swapIndex(arrVal, index1, index2){
    arrVal[index1] = arrVal[index1]+arrVal[index2];
    arrVal[index2] = arrVal[index1]-arrVal[index2];
    arrVal[index1] = arrVal[index1]-arrVal[index2];
}

console.log(reverseAnArray(0,[1,3,2,4,5],5));

//using array destructing method for swaping array variables ES6
function reverseAnArray2(i, arrVal,n){
    //Basecase
    if(i>=n/2)
        return arrVal;

    [arrVal[i],arrVal[n-i-1]] =[arrVal[n-i-1],arrVal[i]];
    return reverseAnArray(i+1, arrVal,n);
}

console.log(reverseAnArray2(0,[1,3,2,4,5],5));
