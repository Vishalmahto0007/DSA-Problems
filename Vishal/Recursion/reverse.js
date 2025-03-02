function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    let res = '';

    if(str.length === 0) return res
    res += str.slice(str.length - 1)
    return res + reverse(str.substring(0, str.length - 1))

  }
  
  // Refactor
// function reverse(str) {
//     // Base case: if the string is empty, return it
//     if (str.length === 0) return "";
    
//     // Recursive case: return the last character + reverse of the remaining string
//     return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
//   }

  console.log(reverse('awesomae')) // 'emosewa'
  console.log(reverse('rithmschool')) // 'loohcsmhtir'