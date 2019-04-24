/**
 * @file Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
 *  '.' Matches any single character.
 *  '*' Matches zero or more of the preceding element
 * @author arlenyang
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    const asterisk = "*";
    const dot = ".";
    // head and tail cursors of s
    let j = 0; 
    // head and tail cursor of p
    let k = 0;
    let matched = true;
    let isSymbolComb = false; // when encounter .*, the match process is over
    
    while (k < p.length) {
        console.log(`j: ${j}`)
        console.log(`k: ${k}`)
        console.log('----')
        // first check str before the expression
        while (j < s.length && k < p.length && s[j] === p[k]) {
            j++;
            k++;
        }
        if (j === s.length && k === p.length) {
            break;
        }

        // not match before special symbol comes
        if (p[k] !== asterisk && p[k] !== dot) {
            if (p[k + 1] === asterisk) {
                k += 2;
                continue;
            }
            else {
                matched = false;
                break;
            }
        } 

        // check when .*
        if (p[k] === dot && p[k + 1] === asterisk) {
            isSymbolComb = true;
            // cause .* will match all the left of s, 
            // so if p has other chars those not .* or its repeat, it'll not match
            // if it has, the match is over and it's matched
            if (k < p.length - 2) { 
                let tag = 0; // 0 means ., 1 means *
                while (k < p.length) {
                    if (p[k] !== asterisk && p[k] !== dot) {
                        matched = false;
                        break;
                    }
                    else {
                        tag = p[k] === dot ? 0 : 1;
                    }
                    k++;
                }

                if (tag === 0) {
                    matched = false;
                }
            }
            break;
        }
        // check pattern when it's dot, just skip it
        if (p[k] === dot) {
            j++;
            k++;
        }
        // check pattern when it's asterisk
        else {
            let repeatChar = p[k - 1];
            let count = 0;
            let m = j - 1;

            while (s[m] === repeatChar) {
                m++;
                count++;
            }
            // not repeat
            if (count === 1) {
                matched = false;
                break;
            }

            if (count > 1) {
                j = j + count - 1;
                // handle the edge case: s = aaa p = a*a,
                //  should back one step to cover char after *
                if (count > 2 && p[k + 1] === repeatChar) {
                    j--;
                }
            }
            k++;
        }
    }

    if (j < s.length && !isSymbolComb) {
        matched = false;
    }

    return matched;
}

// let str = 'aab';
// let pattern = 'a*';
// let str = "mississippi";
// let pattern = "mis*is*p*.";
// let pattern = "mis*is*ip*.";
// let str = "aab";
// let pattern = "c*a*b";
// let str = "";
// let pattern = ".*";
// let str = "aab";
// let pattern = "a*ab";
let str = "aaa";
let pattern = "ab*a*c*a";

console.log(isMatch(str, pattern));