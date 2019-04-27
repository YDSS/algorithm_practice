/**
 * @file Integer to Roman
 * @author arlenyang
 */

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman2(num) {
    const symbols = ["I", "V", "X", "L", "C", "D", "M"];

    return recursion(num, "");

    function recursion(num, romans) {
        if (num <= 0) {
            return romans;
        }

        let i; // pos of symbol the num represent in symbols
        let symbol; // the symbol the num represent in symbols
        let n; // the digit of the num in current
        let numWithoutRemnant;

        if (num >= 1000) {
            i = 6;
            n = Math.floor(num / 1000);
            numWithoutRemnant = n * 1000;
        } else if (num >= 100) {
            i = 4;
            n = Math.floor(num / 100);
            numWithoutRemnant = n * 100;
        } else if (num >= 10) {
            i = 2;
            n = Math.floor(num / 10);
            numWithoutRemnant = n * 10;
        } else {
            i = 0;
            n = num;
            numWithoutRemnant = num;
        }

        if (n < 4) {
            symbol = symbols[i].repeat(n);
        } else if (n === 4) {
            symbol = symbols[i] + symbols[i + 1];
        } else if (n === 5) {
            symbol = symbols[i + 1];
        } else if (n < 9) {
            symbol = symbols[i + 1] + symbols[i].repeat(n - 5);
        }
        // n == 9
        else {
            symbol = symbols[i] + symbols[i + 2];
        }

        return recursion(num - numWithoutRemnant, romans + symbol);
    }
}

function intToRoman(num) {
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
    let roman = ""; // Initialize the return value

    for (const letter in map) {
        const n = map[letter];

        while (num >= n) {
            roman += letter;
            num -= n;
        }
    }
    return roman; // All done
}

// let num = 1994;
// let num = 58;
// let num = 3999;
let num = 3909;
console.log(intToRoman(num));
