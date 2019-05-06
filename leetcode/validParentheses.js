/**
 * @file Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *  Open brackets must be closed by the same type of brackets.
 *  Open brackets must be closed in the correct order.
 *
 * Note that an empty string is also considered valid.
 */

class Stack {
    constructor() {
        this._list = [];
    }

    push(val) {
        this._list.push(val);
    }

    pop() {
        if (this.isEmpty()) {
            return -1; 
        }

        let deleted = this._list.splice(this._list.length - 1, 1);

        return deleted[0];
    }

    isEmpty() {
        return this._list.length === 0;
    }

    print() {
        console.log(this._list);
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    if (s === "") {
        return true;
    }

    let ret = true;
    let pair;
    let beforePairs = ['(', '{', '['];
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ")" && s[i] !== "}" && s[i] !== "]") {
            stack.push(s[i]);
        }
        else {
            if (s[i] === ")") {
                pair = "(";
            }
            else if (s[i] === '}') {
                pair = "{"
            }
            else if (s[i] === ']') {
                pair = "[";
            }

            let pop = stack.pop();
            while (true) {
                if (pair === pop) {
                    break;
                }
                if (pop === -1) {
                    ret = false;
                    break;
                }
                let otherPairs = beforePairs.filter(p => p !== pair);
                if (otherPairs.some(p => pop === p)) {
                    ret = false;
                    break;
                }

                pop = stack.pop();
            }           
            if (!ret) {
                break;
            }
            else {
                continue;
            }
        }
    }
    if (!ret) {
        return ret;
    }
    // check if the left of stack has ({[
    if (!stack.isEmpty()) {
        let pop = stack.pop();
        while (pop !== -1) {
            if (pop === '(' || pop === '{' || pop === '[') {
                ret = false;
                break;
            }
            pop = stack.pop();
        }
    }

    return ret;
}

// let s = '{}'
// let s = "()[]{}"
// let s = "(]"
// let s = "([)]"
// let s = "{[]}"
// let s = '(123'
// let s = '123)'
// let s = '({123)'
let s = '({214}1231]123'
console.log(isValid(s))