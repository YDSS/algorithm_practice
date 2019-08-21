/**
 * @file 151. Reverse Words in a String
 * @author arlenyang
 */

/**
 * left to right iterate, 
 * if right to left, no need words.reverse 
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    let words = [];
    let i = -1;
    let j;

    while (true) {
        while (s[++i] === " ") {}
        if (i >= s.length) {
            break;
        }
        j = i;
        while (s[++j] !== " " && j < s.length) {}
        // copy word to tmp arr
        let word = "";
        for (let k = i; k < j; k++) {
            word += s[k];
        }
        words.push(word);
        i = j;
    }
    // console.log(words);

    return words.reverse().join(" ");
}

// s = "the sky is blue";
// s = "  hello world!  ";
// s = "a good   example";
s = ""

console.log(reverseWords(s));
