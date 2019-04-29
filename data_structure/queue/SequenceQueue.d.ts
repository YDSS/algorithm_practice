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
export default class SequenceQueue {
    maxSize: number;
    _realMaxSize: number;
    _queue: any[];
    front: number;
    rear: number;
    constructor(maxSize: any);
    isEmpty(): boolean;
    isFull(): boolean;
    enter(item: any): void;
    leave(): any;
    /**
     * traverse all the element in the queue
     * @param {function} cb pass every element to cb
     *
     * @return {Array} all the result cb ran
     */
    traverse(cb: any): Array<any>;
    print(): void;
}
