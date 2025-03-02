// function isSubsequence(str1,str2) {
//   // good luck. Add any arguments you deem necessary.
//   const str1Len = str1.length;
  
  

//   let i = 0, j = 0, counter = 0;

//   if(str1Len > str2.length) return false; 
  
//   while (str1Len > counter){
//     const str2Len = str2.length;
//     console.log(str2Len)
//       if(str1[i] === str2[j]){
//       // console.log(str1[i])
//       i++;
//       str2 = str2.replace(str2[j],"")
//       counter++;
//       j=0;
//       // console.log(str2)
//     }else if(str1[i] !== str2[j] && str2Len !== (j)){
//       j++    
//     }else if(str1[i] !== str2[j] && str2Len === (j)){
//       return false;
//     }

    
       
//   }

//   return true;
// }

//Reference by DSA
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'stin')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)