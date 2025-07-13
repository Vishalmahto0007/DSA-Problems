function countEqualStripes(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  console.log(sum);

  if (sum % 2 != 0) return 0;
  let preFix = 0,
    half = sum / 2,
    count = 0;

  // Loop till n-1 to ensure both parts are non-empty
  for (let i = 0; i < arr.length - 1; i++) {
    preFix += arr[i];
    if (preFix === half) count++;
  }

  return count;
}

console.log(countEqualStripes([0, 0]));
