/*
Selection Sort
As the name say, select minimum. (Select minimum and swap)

[13,46,24,52,20,9] ----> [9,46,24,52,20,13]
1. Look at the entire array and find the minimum
and swap it with the first element.

2. [9,46,24,52,20,13] ----> [9,13,24,52,20,46]

3. [9,13,24,52,20,46] ----> [9,13,20,52,24,46]

4. [9,13,20,52,24,46] ----> [9,13,20,24,52,46]

5. [9,13,20,24,52,46] ----> [9,13,20,24,46,52]

 */

function selectionSort(arr,n){
    for(let i=0;i<=n-2; i++){
        let minIndex = i;

        //Find the minimum element's index from i - (n-1)
        for(let j=i+1;j<=n-1;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex != i)
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];

    }

    return arr;
}

console.log(selectionSort([13,46,24,52,20,9],6));
console.log(selectionSort([],0));

/* 
LeetCode : https://leetcode.com/problems/sort-colors/description/?source=submission-ac
Code 360 : https://www.naukri.com/code360/problems/selection-sort_981162
GFG : https://www.geeksforgeeks.org/problems/selection-sort/1 
*/


/*  
Time Complexity : o(N^2)
*/ 