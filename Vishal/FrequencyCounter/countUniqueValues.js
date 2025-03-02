function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
     let count = 1, i =0, j=0;
      if(arr.length === 0 ){
            return 0;
      }
      //5 > 0
     while((arr.length - 1) >= j){ 
         // console.log("arr.length",arr.length)
         // console.log("j", j)
        
        if(arr[i]===arr[j]){
            j++
        }else{
            i=j;
            j++;
            count++
        }      
        
     }
  
      return count;
    
  }
  
  console.log(countUniqueValues([1,1,1,1,1,2])) // 2
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
  console.log(countUniqueValues([])) // 0
  console.log(countUniqueValues([-2,-1,-1,0,1])) // 4