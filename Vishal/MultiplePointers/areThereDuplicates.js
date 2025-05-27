function areThereDuplicates(...args) {
  args.sort();
  let i = 0,
    j = 1;

  while (j < args.length) {
    if (args[i] === args[j]) return true;
    i++;
    j++;
  }

  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 3, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
