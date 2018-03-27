/**
 * @file sequence stack implement
 * @author YDSS
 */

module.exports = class SequenceStack {
    constructor(maxSize) {
        this._stack = [];
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
            throw new RangeError('this _stack is full');
        }

        this._stack.length += 1;
        this.top += 1;
        this._stack[this.top] = item;
    }

    pop() {
        if (this.isEmpty()) {
            throw new RangeError('this _stack is empty');
        }

        let item = this._stack[this.top];
        this._stack.length -= 1;
        this.top -= 1;
        
        return item;
    }
}