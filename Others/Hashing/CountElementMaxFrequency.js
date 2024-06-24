/* 
Leet COde : 3005. Count Elements With Maximum Frequency
https://leetcode.com/problems/count-elements-with-maximum-frequency/

You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.


Example 1:

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
Example 2:

Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
function maxFrequencyElements(nums) {
    let frequencyMap = new Map();

    for(let i=0; i<nums.length; i++){
        if(frequencyMap.has(nums[i])){
            frequencyMap.set(nums[i], frequencyMap.get(nums[i])+1);
        }else{
            frequencyMap.set(nums[i],1);
        }
    }

    let maxFreq = 0;
    for(let [key,value]  of frequencyMap){
        if(value > maxFreq)
            maxFreq = value;
    }

    let sum = 0;
    for(let [key,value] of frequencyMap){
         if(value === maxFreq)
            sum+=value;
    }

    return sum;
};

console.log(maxFrequencyElements([1,2,2,3,1,4]));
console.log(maxFrequencyElements([1,2,3,4,5]));
