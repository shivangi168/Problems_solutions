function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
}
console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
console.log(rotateString("a", "a"));         // true
console.log(rotateString("abc", "cab"));     // true
console.log(rotateString("abc", "bca"));     // true