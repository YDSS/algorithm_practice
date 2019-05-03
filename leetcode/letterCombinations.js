/**
 * @file Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * @author arlenyang
 */

const numMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
};

/**
 * brutal force, backtracing
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations2(digits) {
    if (!digits.length) {
        return [];
    }

    digits = digits.split("");
    let combinations = numMap[digits.shift()];
    let backtracing = (combinations, digits) => {
        if (digits.length === 0) {
            return combinations;
        }
        let digit = digits.shift();
        let digitMap = numMap[digit];
        let tmp = [];
        let count = 0;
        for (let i = 0; i < combinations.length; i++) {
            for (let j = 0; j < digitMap.length; j++) {
                tmp[count] = `${combinations[i]}${digitMap[j]}`;
                count++;
            }
        }
        combinations = tmp;

        return backtracing(combinations, digits);
    };

    return backtracing(combinations, digits);
}

/**
 * brutal force, backtracing2
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }

    let combinations = [];

    let backtracing = (combination, nextDigits) => {
        if (nextDigits.length === 0) {
            combinations.push(combination);
            return;
        }

        let digit = nextDigits[0];
        let digitMap = numMap[digit];
        for (let i = 0; i < digitMap.length; i++) {
            backtracing(combination + digitMap[i], nextDigits.slice(1));
        }
    };

    backtracing("", digits);
    return combinations;
}

let digits = "235";
console.log(letterCombinations(digits));
