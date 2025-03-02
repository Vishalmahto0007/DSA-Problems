function averagePair(arr,avgNum){
    // add whatever parameters you deem necessary - good luck!
      let i = 0, j = arr.length -1;
  
      if(arr.length === 0) return false;
  
      while(i < j){
          let avgVal = (arr[i] + arr[j])/2
          if(avgVal === avgNum) return true;
          else if(avgVal > avgNum) j--;
          else if(avgVal < avgNum) i++;
      }
  
      return false;
  }
  
  averagePair([1,2,3],2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19],8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([],4) // false