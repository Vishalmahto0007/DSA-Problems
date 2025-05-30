console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1


function binarySearch(arr,num){
    // add whatever parameters you deem necessary - good luck!
    // We assume that the arr is sorted.

    let start = 0, 
    end = arr.length - 1, 
    mid = Math.floor((start + end)/2);

    while (num !== arr[mid] && start <= end) {
      if(num < arr[mid]) end = mid - 1
      else start = mid + 1
      
      mid =  Math.floor((start + end)/2);

    }

    return arr[mid] === num ? mid : -1;
}