/**
 * @file 791. Custom Sort String
 * @author arlenyang
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString(S, T) {
    if (!S.length || !T.length) {
        return T;
    }
    // init sort map according to S
    let sortMap = {};
    // set sequence number to every char in S by left to right order
    let counter = 1;
    for (let i = 0; i < S.length; i++) {
        sortMap[S[i]] = counter++;
    } 
    let sorted = T.split("");
    sorted.sort((a, b) => {
        if (sortMap[a] && sortMap[b]) {
            return sortMap[a] - sortMap[b];
        }

        return false;
    })

    return sorted.join("");
}

// let S = "cba"
// let T = "abcd"
// let S = ""
// let T = "abcd"
// let S = "asd"
// let T = ""
// let S = "asd"
// let T = "jfmnewld"
let S = "akdj";
let T = "mdsqajfedjlwmmdkdrjqrh"
console.log(customSortString(S, T));