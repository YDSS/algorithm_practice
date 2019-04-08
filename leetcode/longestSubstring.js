/**
 * @file get the longest substring without repeating
 * @author arlenyang
 */

/**
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
    // head and tail pointer of current longest substring
    let p = 0;
    let q = 0; 
    // head and tail pointer of possible duplicate subsring to current longest substring
    let h = 0;
    let k = 0; 
    // head and tail pointer of result substring
    let r = 0;
    let m = 0; 

    let isRepeat = i => {
        return str[i] === str[i - 1];
    }

    let updateRet = i => {
        r = p;
        m = q;
        p = i + 1;
        q = p;
        h = p;
        k = p;
    }

    let len = str.length;
    for (let i = 1; i < len; i++) {
        if (p === q) {
            q += 1;
            return;
        }

        if (isRepeat(i)) {
            updateRet(i);
            return;            
        }
    }
}
