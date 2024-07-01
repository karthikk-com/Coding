/* 
Bubble Sort : 
Pushes the max to last (opp. to selection sort , where it push the minimum to the front)
by adjacent swaps
*/

//[99, 44, 6, 2, 1, 5] --> [44, 99, 6, 2, 1, 5] --> [44, 6, 99, 2, 1, 5]--> [44, 6, 2, 99, 1, 5]--> [44, 6, 2, 1, 99, 5]--> [44, 6, 2, 1, 5, 99]


function bubbleSort(arr,n){

    for(let i=0; i<n-1;i++){
        for(let j=0;j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr;

}

console.log(bubbleSort([99, 44, 6, 2, 1, 5],6))

/* 
LeetCode : 
Code 360 : https://www.naukri.com/code360/problems/bubble-sort_980524
GFG : 
*/