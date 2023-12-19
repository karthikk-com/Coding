/* 
Given an integer array and another integer element. The task is to find if the given element is present in array or not.

Input:
n = 4
arr[] = {1,2,3,4}
x = 3
Output: 2

If the element X does not exist in the array, the function should return -1.

Expected Time Complexity: O(n).
Expected Auxiliary Space: O(1).
*/

class SearchArray{
    search(arr, N, X){
        //Linear Search
        for(let i=0; i<N; i++){
            if(arr[i] === X)
                return i;
        }
        return -1;
    }

    //Method 2
    /* 
    search(arr,N,X){
        let set = new Set(arr);
        if(set.has(X))
            return arr.indexOf(X);
        
        return -1;
    } */
}

const array = new SearchArray();
console.log(array.search([1,2,3,4],4,3));