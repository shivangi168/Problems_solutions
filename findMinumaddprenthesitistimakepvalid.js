function minAddToMakeValid(s) {
    let balance = 0;
    let insertions = 0;

    for (let char of s) {
        if (char === '(') {
            balance++;
        } else {
            if (balance > 0) {
                balance--;
            } else {
                insertions++;
            }
        }
    }

    return insertions + balance;
}
