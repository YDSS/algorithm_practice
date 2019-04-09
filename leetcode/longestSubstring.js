/**
 * @file get the longest substring without repeating
 * @author arlenyang
 */

/**
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
    // head pointer of current longest substring
    let p = 0;
    // tail pointer of current longest substring, also it's the cursor in the whole traverse
    let i = 0;
    // length of the longest substring, aka the result
    let len = 0;
    // a charactor map to check if the substring has repeat charactors,
    //  the key is the char itself, and the value is the index where the char in the str
    let repeatMap = {};
    // record the index of the longest substring
    let k = p;
    let m = i;

    // check if the current char is repeat
    let isRepeat = i => {
        let char = str[i];
        if (repeatMap[char]) {
            return true;
        }

        repeatMap[char] = i;
        return false;
    }

    for (; i < str.length; i++) {
        if (isRepeat(i)) {
            let curLen = i - p;
            if (curLen > len) {
                len = curLen;
                k = p;
                m = i - 1;
            }
            // reset the head pointer to the index of first repeat char, which is the start of new str
            let repeatCharIndex = repeatMap[str[i]];
            p = repeatCharIndex + 1;
            // reset the map when the substring has a repeat char
            // repeatMap = {};
            // repeatMap[str[i]] = true;
        }
        // calcuate the lenght of current substring when cursor reach the end
        else if (i === str.length - 1) { 
            let curLen = i - p + 1;
            if (curLen > len) {
                len = curLen;
                k = p;
                m = i;
            }
        }
    }
    
    console.log(`the longest substring is ${str.substring(k, m + 1)},\nit's length is ${len}`);

    return len;
}

// let str = 'abcabcbb';
// let str = 'bbbb';
// let str = 'bbabb';
// let str = 'pwwkew';
// let str = 'abcdabef';
let str = 'dvdf';
console.log(lengthOfLongestSubstring(str));
