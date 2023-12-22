/* Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.
Input:
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output: 1 10000

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/

class Find{
    getMinMax(arr, n){
        let min = arr[0];
        let max = arr[0];

        for(let element of arr){
            if(element < min)
                min = element;
            else if(element >max)
                max = element;
        }

        return [min, max];
    }
}

const solution = new Find();
console.log(solution.getMinMax([3,2,1,56,1000,167], 6));

