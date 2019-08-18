/**
 * @file sequence stack implement
 * @author YDSS
 */

export default class Stack {
    private stack: any[];
    private top: number;
    public maxSize: number;

    constructor(maxSize) {
        this.stack = [];
        this.top = 0;
        this.maxSize = maxSize || -1;
    }

    public isEmpty(): boolean {
        return this.top === 0;
    }

    public isFull(): boolean {
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

    push(item): void {
        if (this.isFull()) {
            throw new RangeError('this stack is full');
        }

        this.stack.length += 1;
        this.top += 1;
        this.stack[this.top] = item;
    }

    pop(): any {
        if (this.isEmpty()) {
            throw new RangeError('this stack is empty');
        }

        let item = this.stack[this.top];
        this.stack.length -= 1;
        this.top -= 1;
        
        return item;
    }
}

// let stack = new Stack(10);
// stack.push(123);
// console.log(stack.pop())
// console.log(stack.isEmpty())
