function secondLargestNum(arr) {
  let firLarNum = 0,
    secLarNum = 0;

  for (const num of arr) {
    if (num > firLarNum) {
      secLarNum = firLarNum;
      firLarNum = num;
    } else if (firLarNum > num && secLarNum < num) {
      secLarNum = num;
    }
  }
  return secLarNum;
}

console.log(secondLargestNum([1, 2, 3, 4, 5, 6]));
console.log(secondLargestNum([1, 2, 5, 4, 7, 6]));
