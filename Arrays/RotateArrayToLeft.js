 var leftRotate = function(arr,k){
    let n = arr.length;
    k = k % n;
  
    let tempArr = [];
    for (let i = 0; i < k; i++){
      tempArr[i] = arr[i];
    }
  
    //shifting
    for (let i = k; i < n; i++){
      arr[i - k] = arr[i];
    }
  
    //fill up the temp arr
    for (let i = n-k; i < n; i++){
      arr[i] = tempArr[i-(n-k)];
    }

    return arr;
}

console.log(leftRotate([1,2,3,4,5,6],2)) //[ 3, 4, 5, 6, 1, 2 ]

