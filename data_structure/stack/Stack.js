"use strict";
/**
 * @file sequence stack implement
 * @author YDSS
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(maxSize) {
        this.stack = [];
        this.top = 0;
        this.maxSize = maxSize || -1;
    }
    isEmpty() {
        return this.top === 0;
    }
    isFull() {
        if (this.maxSize < 0) {
            return false;
        }
        if (this.maxSize === 0) {
            return true;
        }
        if (this.maxSize > 0) {
            return this.maxSize <= this.top;
        }
    }
    push(item) {
        if (this.isFull()) {
            throw new RangeError('this stack is full');
        }
        this.stack.length += 1;
        this.top += 1;
        this.stack[this.top] = item;
    }
    pop() {
        if (this.isEmpty()) {
            throw new RangeError('this stack is empty');
        }
        let item = this.stack[this.top];
        this.stack.length -= 1;
        this.top -= 1;
        return item;
    }
}
exports.default = Stack;
// let stack = new Stack(10);
// stack.push(123);
// console.log(stack.pop())
// console.log(stack.isEmpty())
//# sourceMappingURL=Stack.js.map