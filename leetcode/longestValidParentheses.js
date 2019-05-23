/**
 * @file Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 * @author arlenyang
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
 * T(n) = O(n), S(n) = O(n)
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
    // init stack
    let stack = new Stack();
    let longestLen = 0;
    for (let i = 0; i < s.length; i++) { 
        if (s[i] !== ")") {
            stack.push(s[i]);
        } else {
            let tmp = [];
            let popChar = stack.pop();
            while (popChar !== -1 && popChar !== "(") {
                tmp.push(popChar);
                popChar = stack.pop();
            }
            // calculate the lenght of this parentheses,
            let len;
            if (popChar === -1) {
                // the parentheses is not valid
                continue;
            } else {
                // if it has substring which is invalid, the sum will be NaN
                len =
                    tmp.reduce((pre, cur) => {
                        return pre + +cur;
                    }, 0) + 2;
            }
            if (!isNaN(len)) {
                // find all the existed lens in the stack, sum then push
                while ((popChar = stack.pop()) !== -1) {
                    if (!Number.isInteger(popChar)) {
                        stack.push(popChar);
                        break;
                    }

                    len += popChar;
                }
                stack.push(len);
                if (len > longestLen) {
                    longestLen = len;
                }
            }
        }
    }

    return longestLen;
}

// let s = "(()"
// let s = ")()())";
// let s = "(()()))()"
let s = ")(()(()))(()"
console.log(longestValidParentheses(s));
