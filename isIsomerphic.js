function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if ((mapST[charS] && mapST[charS] !== charT) ||
            (mapTS[charT] && mapTS[charT] !== charS)) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
}
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("ab", "aa")); // false
