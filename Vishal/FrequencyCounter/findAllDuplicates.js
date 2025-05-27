function findAllDuplicates(arr) {
  let res = [],
    freq = {};

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > 1) res.push(num);
  }

  return res;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
