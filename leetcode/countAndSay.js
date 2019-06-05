/**
 * @file 38. Count and Say
 * @author arlenyang
 */

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    let sayOnce = said => {
        if (said.length === 1) {
            return "11";
        }

        let ret = "";
        let count = 1;
        let i = 1;
        while (i < said.length) {
            if (said[i - 1] === said[i]) {
                count++;
            }
            else { 
                ret += (count + said[i - 1]);
                count = 1;
            }
            i++;
        }
        if (count > 1) {
            ret += (count + said[said.length - 1]);
        }

        return ret;
    } 
    
    let ret = "1";
    for (let i = 0; i < n; i++) {
        ret = sayOnce(ret); 
    }

    return ret;
};

// let n = 1;
let n = 4;
console.log(countAndSay(n))