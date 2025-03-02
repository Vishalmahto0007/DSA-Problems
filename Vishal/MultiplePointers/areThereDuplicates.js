function areThereDuplicates(...arr) {
    // good luck. (supply any arguments you deem necessary.)
      let i = 0, j = arr.length -1;
      while(i < j){
          if(arr[i]===arr[j]) return true;
          else i++
      }
  
      return false;
  }
  
  // areThereDuplicates(1, 2, 3) // false
  // areThereDuplicates(1, 2, 2) // true 
  areThereDuplicates('a', 'b', 'c', 'a') // true 
  