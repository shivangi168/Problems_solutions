const str = "ignavihs alkuhs";
console.log(reverseWords(str));

function reverseWords(str) {
    const strArr = str.split(' ');
    let res = "";

    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        let reversedWord = "";

        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        res += reversedWord + " ";
    }

    return res.trim(); // remove the trailing space
}