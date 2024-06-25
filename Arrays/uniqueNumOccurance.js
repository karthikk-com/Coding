/* 
    LeetCode : 1207
    Given an array of integers arr, return true if the number of occurrences of
    each value in the array is unique, or false otherwise.

    Input: arr = [1,2,2,1,1,3]
    Output: true
    Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values 
    have the same number of occurrences.

    Input: arr = [1,2]
    Output: false

    Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
    Output: true
 */
function getUniqueOccurrences(arr) {
    let map = {};

    for(let i=0; i<arr.length; i++){
        map[arr[i]] = (map[arr[i]]) ? map[arr[i]]+1 : 1;
    }

    let mapValue = Object.values(map);
    return mapValue.length === new Set(mapValue).size;
}

console.log(getUniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));
console.log(getUniqueOccurrences([1,2]));

/* 
One more approach (Count sort approach)
Sort the map value and iterate over the map -> if the consecutive value are equal, 
the return false, else return true
*/


