function minSubArrayLen(arr,num){

    let tempArr = [], tempSum = 0;
    arr = arr.sort((a,b)=> b - a);
    
    for (let val of arr){

        if(val >= num) return 1;
        else if(tempSum >= num){
            console.log(tempArr,tempSum)
            return tempArr.length;
        } 
        else{
            tempSum += val;
            tempArr.push(val)
        }
        
    }

    console.log(tempArr)

    return tempArr.length;
    

}



// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0