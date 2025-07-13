function countSubarraysWithSum(arr, n) {
  arr.sort((a, b) => a - b); //[1,1,3,5,5,6]
  let prefix = 0,
    i = 0,
    j = 0,
    count = 0;
  while (i < arr.length - 1) {
    if (prefix > n) {
      prefix -= arr[i];
      i++;
    } else if (prefix === n) {
      prefix -= arr[i];
      i++;
      count++;
    } else {
      prefix += arr[j];
      j++;
    }
  }

  return count;
}

console.log(countSubarraysWithSum([1, 3, 5, 1, 5, 6], 10));
