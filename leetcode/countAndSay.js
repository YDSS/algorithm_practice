/**
 * @file 38. Count and Say
 * @author arlenyang
 */

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    let m = n;
    let sayR = (said, m) => {
        if (m === 0) {
            return said;
        }
        if (m === n) {
            return sayR("1", m - 1);
        }
        let saidNext = "";
        let count = 1;
        for (let i = 0; i < said.length - 1; i++) {
            if (said[i] === said[i + 1]) {
                count++;
            }
            else {
                saidNext += `${count}${said[i]}`;
                count = 1;
            }
        }
        saidNext += `${count}${said[said.length - 1]}`

        return sayR(saidNext, m - 1);
    } 

    return sayR("", m);
};

// let n = 1;
let n = 3;
console.log(countAndSay(n))