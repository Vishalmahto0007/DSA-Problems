// console.log("Hello")

// function objCount(str){
//    let obj = {}

//     for(let char of str){
        
//         obj[char] = ++obj[char] || 1
//     }
//     return obj
// }

// objCount("hi there hELLOH")
// let val

// console.log(++val)



function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        return false;
    }
      
    let freqStr1={}, freqStr2={}
    
    for (let char of str1){
        freqStr1[char] = (freqStr1[char] || 0 ) + 1      
    }   
      
    for (let char of str2){
        freqStr2[char] = (freqStr2[char] || 0 ) + 1      
    }
  
    for (let key in freqStr1){
        if(freqStr1[key] != freqStr2[key]) {
            return false;
        }
    }
      return true;
    
  }
  
  
  console.log(validAnagram('', '')) // true
  console.log(validAnagram('aaz', 'zza')) // false
  console.log(validAnagram('anagram', 'nagaram')) // true
  console.log(validAnagram("rat","car")) // false) // false
  console.log(validAnagram('awesome', 'awesom')) // false
  console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
  console.log(validAnagram('qwerty', 'qeywrt')) // true
  console.log(validAnagram('texttwisttime', 'timetwisttext')) 