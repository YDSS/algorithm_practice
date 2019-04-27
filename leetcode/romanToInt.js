/**
 * @file Roman to Integer
 * @author arlenyang
 */

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let num = 0;

    while (s.length > 0) { // T(n) = n * 13 = O(n)
        let max = 0;
        let maxSymbolLen;
        for (let symbol in map) { // 13
            let val = map[symbol];
            if (s.indexOf(symbol) === 0 && val > max) {
                max = val; 
                maxSymbolLen = symbol.length;
            }
        }
        num += max;
        s = s.slice(maxSymbolLen);
    }

    return num;
}

// let s = 'LVIII';
let s = 'MCMXCIV';
console.log(romanToInt(s));