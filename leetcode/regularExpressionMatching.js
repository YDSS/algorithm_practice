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
    let i = 0; 
    let j = 0; 
    // head and tail cursor of p
    let h = 0;
    let k = 0;
    let matched = true;
    
    while (j === s.length - 1 && k === p.length - 1) {
        for (; k < p.length; k++) {
            if (p[k] === asterisk || p[k] === dot) {
                break;
            } 
        }
        // first check str before the expression
        let tmpP = p.slice(h, k - 1);
        let tmpS = s.slice(i, i + k - 1 - h);
        if (tmpP !== tmpS) {
            matched = false; 
            break;
        }
        else {
            i = i + k - 1 - h; // new char behind tmpS
            j = i;
            h = k;
        }
        // check when .*
        if (p[k] === dot && p[k + 1] === asterisk) {
            if (k !== p.length - 1) {
                matched = false;
            }
            break;
        }
        // check pattern when it's dot
        if (p[k] === dot) {
            if (s[i] !== p[k - 1]) {
                matched = false;
                break;
            }
            
            i += 2;
            j = i;
            k++;
            h = k;
        }
        // check pattern when it's asterisk
        else {
            let repeatChar = p[k - 1];
            let count = 0;
            let m = i;

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
                i += count;
            }
            j = i;
            k++;
            h = k;            
        }
    }

    return matched;
};