/* Check if the interger array contains duplicate

Input : [1,2,3,1]
Output : true

Input : [9,2,3,6]
Output : false

Leetcode 217 : https://leetcode.com/problems/contains-duplicate/
*/

//Brute Force Approach o(n^2)
function containsDuplicate(nums){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j])
                return true;
        }
    }

    return false;
}
console.log("containsDuplicate: ",containsDuplicate([1,2,3,1]));

//Optimize approach - O(N)
function containsDuplicate2(nums) {
    let dataStore={};
    for(let i=0; i<nums.length; i++){
        if(dataStore[nums[i]] !== undefined) // if the key doesn't exist, it returns undefined. Hence checking the same.
            return true;
        else
            dataStore[nums[i]]=true;
    }

    return false;
}

console.log("containsDuplicate: ",containsDuplicate2([9,2,3,6]));