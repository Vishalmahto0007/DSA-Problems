function maxSubarraySum(arr,num){
    let tempVal = 0, maxVal = 0;
    if(arr.length < num) return null;

    for(let i=0; i < num; i++) {
        maxVal += arr[i];
    }
    tempVal = maxVal;
    // console.log("tempVal",tempVal)
    
    for(let j = num; j < arr.length; j++){        
        tempVal = (tempVal - arr[j-num]) + arr[j];
        maxVal = Math.max(tempVal,maxVal)    
    }
    return maxVal;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)