// arr[]=[1,0,2,3,2,0,0,4,5,1]


// BruteForce Method

function moveAllZeros(arr){
    let tempArr = [];
    let l = arr.length;

    for(let i=0; i<l; i++)
        if(arr[i] !=0)
            tempArr.push(arr[i]);
    
    for(let i=0; i<tempArr.length; i++){
        arr[i]=tempArr[i];
    }

    for(let i=tempArr.length; i<l; i++)
        arr[i]=0;

    return arr;
}

// console.log(moveAllZeros([1,0,2,3,2,0,0,4,5,1]));

// Optimal approach

function moveAllZeros2(A){
    let n = A.length; 
    let j = 0; 
    for (let i = 0; i < n; i++) { 
        console.log(i,j);
        if (A[i] != 0) { 
            //   Swap - A[j] , A[i] 
            swap(A, j, i); // Partitioning the array 
            j++; 
        } 
    } 

    return A;


    // let n = a.length;
    // let j=1;
    // for(let i=0; i<n;i++){
    //     console.log(i,j)
    //     if(a[i]===0){
           
    //        swap(a,i,j);
    //        j++;
    //      }
        
    // }

    // return a
}

function swap(arr,i,j){
    console.log(`${arr} :i : ${arr[i]} : J : ${arr[j]}`)
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

console.log(moveAllZeros2([2,1,2,0,2,4,0,4,5,1]));