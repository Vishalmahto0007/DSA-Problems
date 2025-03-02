//sameFrequency
function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
      const num1ToString = String(num1), num2ToString = String(num2)
      if(num1ToString.length !== num2ToString.length) return false;
      let obj1={}, obj2={}
  
      for(let char of num1ToString){
          obj1[char] = (obj1[char] || 0) + 1
      }
  
      for(let char of num2ToString){
          obj2[char] = (obj2[char] || 0) + 1
      }
  
      for(let key in obj1){
          if(obj1[key]!==obj2[key]) return false;
      }
  
      return true;
  }
  
  
  
  
  
  // sameFrequency(182,281) // true
  // sameFrequency(34,14) // false
  // sameFrequency(3589578, 5879385) // true
  sameFrequency(22,222) // false