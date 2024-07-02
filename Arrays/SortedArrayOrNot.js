/* 
You have been given an array ‘a’ of ‘n’ non-negative integers.
You have to check whether the given array is sorted in the non-decreasing order or not.

Example :
Input: ‘n’ = 5, ‘a’ = [1, 2, 3, 4, 5]
Output: 1

Input: ‘n’ = 5, ‘a’ = [4, 4, 5, 4, 4]
Output: 0
*/

function checkIfSortedArray(nums){
    
    let n = nums.length;
    for(let i=0;i<n-1;i++){
        console.log(nums[i], nums[i+1]);
        if(nums[i]<=nums[i+1]){

        }else{
            return 0;
        }

    }

    return 1;
}


console.log(checkIfSortedArray([1,2,3,4,5]));
console.log(checkIfSortedArray([4,4,5,3,4]));

/* 
Time Complexity ; O(N);
*/

/* 
LeetCode : 
Code 360 : https://www.naukri.com/code360/problems/ninja-and-the-sorted-check_6581957
GFG : 
*/