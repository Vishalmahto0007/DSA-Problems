function findPair(arr, n) {
  if (n === 0) {
    const seen = new Set();

    for (const num of arr) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
  }

  const setVals = new Set(arr);

  for (const val of arr) {
    if (setVals.has(val + n) || setVals.has(val - n)) return true;
  }

  return false;
}
