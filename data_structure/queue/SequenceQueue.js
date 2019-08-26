"use strict";
/**
 * @file implementation of circular sequence queue
 * @author YDSS
 *
 * Created on Tue Mar 27 2018
 *
 * The MIT License (MIT)
 * Copyright (c) 2018 YDSS
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class SequenceQueue {
    constructor(maxSize) {
        if (!maxSize) {
            throw new Error("maxSize can not be null");
        }
        this.maxSize = maxSize;
        // there wiil be lack of one space compare with maxSize 
        // in circular sequence queue, so add 1 to make the queue right
        this._realMaxSize = maxSize + 1;
        this._queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.front < this.rear) {
            return this.rear - this.front;
        }
        else {
            return this.maxSize - this.front + this.rear + 1;
        }
    }
    isEmpty() {
        return this.front === this.rear;
    }
    isFull() {
        return (this.rear + 1) % this._realMaxSize === this.front;
    }
    enter(item) {
        if (this.isFull()) {
            throw new Error('the queue is full');
        }
        this._queue[this.rear] = item;
        this.rear = (this.rear + 1) % this._realMaxSize;
    }
    leave() {
        if (this.isEmpty()) {
            throw new Error('the queue is empty');
        }
        let item = this._queue[this.front];
        delete this._queue[this.front];
        this.front = (this.front + 1) % this._realMaxSize;
        return item;
    }
    /**
     * traverse all the element in the queue
     * @param {function} cb pass every element to cb
     *
     * @return {Array} all the result cb ran
     */
    traverse(cb) {
        if (this.isEmpty()) {
            return [];
        }
        let ret = [];
        let i = this.front;
        while (i % this._realMaxSize < this.rear) {
            ret.push(cb(this._queue[i % this._realMaxSize]));
            i++;
        }
        return ret;
    }
    /**
     * clear the queue
     */
    clear() {
        this._queue = [];
        this.front = 0;
        this.rear = 0;
    }
    print() {
        console.log(this._queue);
    }
}
exports.default = SequenceQueue;
let q = new SequenceQueue(3);
q.enter(1);
q.enter(2);
q.enter(3);
q.leave();
q.leave();
q.enter(3);
q.enter(3);
console.log(q.size());
//# sourceMappingURL=SequenceQueue.js.map