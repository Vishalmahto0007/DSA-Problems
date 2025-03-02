function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let tempSubString = '', i = 0;
    if(str.length === 0 ) return 0;
    if(str.length === 1 ) return 1;

    while (str.length > i ) {
               

        if(!tempSubString.includes(str[i])){
            tempSubString += str[i]
            i++;
        }else if(tempSubString.includes(str[i]) && ((tempSubString.length) > (str.length / 2)))
            return tempSubString.length
        
            
        else if(tempSubString.includes(str[i])){
            tempSubString = str[i]
            i++;
        }   
    }
    console.log("tempSubString :", tempSubString)
    
    return tempSubString.length;
            
                

  }

// console.log(findLongestSubstring('a')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6