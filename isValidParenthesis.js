function isValid(s) {
    const stack = [];

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            if (stack.length === 0) return false;

            const top = stack.pop();
            if ((c === ')' && top !== '(') ||
                (c === '}' && top !== '{') ||
                (c === ']' && top !== '[')) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(isValid("()[]{}"));      // true
console.log(isValid("(]"));          // false
console.log(isValid("([{}])"));      // true
console.log(isValid("((("));         // false
