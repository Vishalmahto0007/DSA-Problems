function constructNote(str1, str2) {
  let obj1 = {},
    obj2 = {};

  for (const char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }

  for (const char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  for (const key in obj1) {
    return !(obj1[key] !== obj2[key]);
  }

  return true;
}

console.log(constructNote("aa", "abc"));
console.log(constructNote("abc", "dcba"));
console.log(constructNote("aabbcc", "bcabcaddff"));
