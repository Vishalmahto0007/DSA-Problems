function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    //rithmschool
    let char = str[i];
    console.log(`Char ${i} :`, char);
    console.log(`Seen ${i} :`, seen);

    console.log(`Seen[Char] ${i} :`, seen[char]);

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    console.log(`longest ${i} :`, longest);

    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  console.log(seen);
  return longest;
}

// findLongestSubstring(""); // 0
console.log(findLongestSubstring("rithmschool")); // 7
// findLongestSubstring("thisisawesome"); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
// findLongestSubstring("thisishowwedoit");
