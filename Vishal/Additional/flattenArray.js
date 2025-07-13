function flattenArray(arr) {
  let updatedArray = [];

  for (const val of arr) {
    Array.isArray(val)
      ? updatedArray.push(...flattenArray(val))
      : updatedArray.push(val);
  }

  return updatedArray;
}

console.log(flattenArray([1, 2, 3, 4, 5]));
console.log(flattenArray([1, 2, [3], 4, 5]));
console.log(flattenArray([1, 2, [3, [4, [5]]], 6, 7]));
