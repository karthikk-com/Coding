/*
Insertion Sort
- Takes an element and place it in its current order. 
 */

/* 
[6,5,14,9,15,12,7]
*/

function insertionSort(arr){
    let n = arr.length;

    for(let i=0; i<=n-1; i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){
            [arr[j-1],arr[j]] = [arr[j], arr[j-1]];
            j--;
            console.log(i,arr);
        }
    }
    return arr;
}

console.log(insertionSort([6,5,14,9,15,12,7]));

console.log(insertionSort([1,2,3,4,5,6]));


/* 
LeetCode : 
Code 360 : https://www.naukri.com/code360/problems/insertion-sort_3155179
GFG : 
*/
