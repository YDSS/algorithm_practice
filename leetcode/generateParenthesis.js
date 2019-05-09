/**
 * @file Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * @author arlenyang
 */

/**
 * backtracing 
 * S(n) = O(1), T(n) = O(n!) ?
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis2(n) {
    // use hashtable first for removing duplicated results, translate it to array in the end
    let ret = {};
    // generate parenthesis chars according to n
    let parenthesis = "(".repeat(n) + ")".repeat(n);
    let total = n * 2;
    // check if current str is illegal
    //  it's illegal when right parentheses are more than left ones 
    let check = str => {
        let len = str.length;
        let leftParenthesisCount = 0;
        let rightParenthesisCount;
        for (let i = 0; i < len; i++) {
            if (str[i] === '(') {
                leftParenthesisCount++;
            }
        }
        rightParenthesisCount = len - leftParenthesisCount; 

        return rightParenthesisCount > leftParenthesisCount;
    }
    // backtracing function
    let bt = (remainParenthesis, str) => {
        if (str.length === total && !ret[str]) {
            ret[str] = true; 
            return;
        }
        if (check(str)) {
            return;
        }

        for (let i = 0; i < remainParenthesis.length; i++) {
            bt(remainParenthesis.slice(0, i) + remainParenthesis.slice(i + 1), str + remainParenthesis[i]);
        }
    }

    bt(parenthesis, "");
    ret = Object.keys(ret).map(key => key);
    
    return ret;
}

/**
 * insert way, backtracing
 * T(n) = O(n^2), S(n) = O(1)
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let ret = [];
    let total = n * 2;

    let backtracing = (leftRemain, rightRemain, str) => {
        if (str.length === total && !ret[str]) {
            ret.push(str);
            return; 
        }
        if (leftRemain > rightRemain) {
            return;
        }
        if (leftRemain === 0) {
            ret.push(str + ")".repeat(rightRemain));
        }
        if (leftRemain > 0) {
            backtracing(leftRemain - 1, rightRemain, str + "(");
            backtracing(leftRemain, rightRemain - 1, str + ")");
        }
    }
    backtracing(n, n, "");

    return ret;
}


let n = 3;
// let n = 6;
console.time('g')
console.log(generateParenthesis(n));
console.timeEnd('g')