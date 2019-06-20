/**
 * @file 72. Edit Distance
 * @author arlenyang
 */

/**
 * generate a 2-dimension matrix, cause js has no syntax sugar for it
 * @param {integer} n row
 * @param {integer} m column
 *
 * @return {array}
 */
function generateTwoDimensionArray(n, m) {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(m);
    }

    return arr;
}

function min(...args) {
    let ret = Number.POSITIVE_INFINITY;
    args.map(num => {
        if (num < ret) {
            ret = num;
        }
    });
    return ret;
}

/**
 * dp, Levenshtein distance algorithm, allow to insert, delete and replace a char
 *
 * the key is how to define the status in the memory. memo[i][j] means the substring of word1 which has the preceding i chars and substring of word2 which has the preceding j chars utilize how many operations to exact match
 *
 * and there are four ways to approach memo[i][j]:
 * 1. delete, memo[i - 1][j] + 1 => memo[i][j], what needs attention is that we don't need to inspect whether w1[i] equals w2[j] or not
 * 2. insert, memo[i][j - 1] + 1 => memo[i][j], like deleting, no need inspect w1[i] and w2[j]
 * 3. replace, when word1[i] == word2[j], memo[i - 1][j - 1] + 1 => memo[i][j]
 * 4. complet, when word1[i] != word2[j], memo[i - 1][j - 1] => memo[i][j]
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance2(word1, word2) {
    // init memory
    let memo = generateTwoDimensionArray(word1.length + 1, word2.length + 1);
    // init the 1th row and column
    // the 1th row means word2 is empty, transfer word1 to word2, so that every char in word1 will change(delete)
    // the 1th column is similar
    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = i;
    }
    for (let i = 1; i < memo[0].length; i++) {
        memo[0][i] = i;
    }
    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[0].length; j++) {
            memo[i][j] = min(
                memo[i - 1][j] + 1,
                memo[i][j - 1] + 1,
                memo[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
            );
        }
    }
    
    return memo[memo.length - 1][memo[0].length - 1];
}

// let word1 = "horse", word2 = "ros";
let word1 = "intention", word2 = "execution"
console.log(minDistance(word1, word2));