// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;


console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

function someRecursive(arr,meth){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return false
    if(meth(arr.pop())) return true;
    return someRecursive(arr,meth)
}

