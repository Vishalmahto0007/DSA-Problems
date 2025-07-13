function findLuckyNumber(arr) {
  let obj = {},
    larLuckyNum = -1;
  for (const num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  for (const key in obj) {
    if (key == obj[key]) {
      larLuckyNum = obj[key];
    }
  }

  return larLuckyNum;
}
