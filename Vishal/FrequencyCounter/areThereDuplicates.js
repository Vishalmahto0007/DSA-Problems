function areThereDuplicates(...args) {
  let obj = {};

  for (const val of args) {
    if (obj[val]) return true;
    else obj[val] = (obj[val] || 0) + 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
