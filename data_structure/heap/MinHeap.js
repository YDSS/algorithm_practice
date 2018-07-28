"use strict";
/**
 * @file implementation of minheap
 * @author YDSS
 *
 * Created on Sun Jul 22 2018
 */
Object.defineProperty(exports, "__esModule", { value: true });
class MinHeap {
    constructor(maxSize) {
        /**
         * actually store elements in the heap,
         *   preset a element of negative infinity at the top of the heap,
         *   it's a mark that help us percolate up
         */
        this.heap = [Number.NEGATIVE_INFINITY];
        this.maxSize = maxSize;
    }
    get size() {
        return this.heap.length - 1;
    }
    /**
     * build a heap with an array of numbers
     *  T(n) = O(n)
     * @param arr
     */
    buildHeap(arr) {
        if (arr.length > this.maxSize) {
            throw new Error("built array exceed max size of the heap");
        }
        arr.forEach((item, index) => {
            this.heap[index + 1] = item;
        });
        for (let i = Math.floor(this.heap.length / 2); i > 0; i--) {
            // this.percolateDownR(i);
            this.percolateDown(i);
        }
    }
    /**
     * insert an element
     *  T(n) = O(logn)
     * @param key
     * @return position of inserted element
     */
    insert(key) {
        if (this.isFull()) {
            throw new Error("the heap is full");
        }
        // insert new element into tail of the heap
        let i = this.heap.length;
        // percolate up until the heap recovered
        while (i > 0) {
            let p = this.findParent(i);
            if (this.heap[p] > key) {
                this.heap[i] = this.heap[p];
                i = p;
            }
            else {
                this.heap[i] = key;
                break;
            }
        }
        return i;
    }
    /**
     * delete min node
     *  T(n) = O(logn)
     * @return min node
     */
    deleteMin() {
        if (this.isEmpty()) {
            throw new Error("the heap is empty");
        }
        // get min element 
        let min = this.heap[1];
        let lastEl = this.heap[this.heap.length - 1];
        // set the last element to root
        this.heap[1] = lastEl;
        this.heap.length -= 1;
        // percolate down until find a place to set the last element
        this.percolateDown(1);
        return min;
    }
    /**
     * merge two min heap
     * @param h1 heap be merged, will store the merged heap
     * @param h2 heap be merged
     */
    static merge(h1, h2) {
    }
    /**
     * percolate down by recursion
     * @param i index of the element in the heap
     */
    percolateDownR(i) {
        if (i * 2 > this.heap.length) {
            return;
        }
        let [lchildI, rchildI] = this.findChild(i);
        let minI;
        // only has one child
        if (this.heap[rchildI] == null) {
            minI = lchildI;
        }
        // has two child
        else {
            minI = this.heap[lchildI] < this.heap[rchildI] ? lchildI : rchildI;
        }
        if (this.heap[i] > this.heap[minI]) {
            this.swap(i, minI);
        }
        this.percolateDownR(minI);
    }
    /**
     * percolate down by non-recursion
     */
    percolateDown(i) {
        let cur = this.heap[i];
        while (i * 2 < this.heap.length) {
            let [lchildI, rchildI] = this.findChild(i);
            let minI;
            if (this.heap[rchildI] == null) {
                minI = lchildI;
            }
            else {
                minI = this.heap[lchildI] < this.heap[rchildI] ? lchildI : rchildI;
            }
            if (cur > this.heap[minI]) {
                this.swap(i, minI);
            }
            i = minI;
        }
    }
    /**
     * find parent of the element in the heap
     * @param i index of the element in the heap
     */
    findParent(i) {
        return Math.floor(i / 2);
    }
    /**
     * find child of the element
     * @param i index of the element in the heap
     * @param direction direction of child of the element
     */
    findChild(i) {
        let lchildIndex = 2 * i;
        let rchildIndex = lchildIndex + 1;
        return [lchildIndex, rchildIndex];
    }
    /**
     * swap two elements in the heap
     * @param x
     * @param y
     */
    swap(x, y) {
        let tmp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = tmp;
    }
    /**
     * determine whether the heap is full
     */
    isFull() {
        return this.size - 1 === this.maxSize;
    }
    /**
     * determine whether the heap is empty
     */
    isEmpty() {
        // the heap has a mark in the top of heap
        return this.size === 1;
    }
    /**
     * print structure of adt
     */
    print() {
        this.printHeapTree(1, 0);
    }
    printHeapTree(i, offset) {
        if (this.heap[i] != null) {
            console.log(" ".repeat(offset), this.heap[i]);
            let [lchildI, rchildI] = this.findChild(i);
            if (this.heap[lchildI]) {
                this.printHeapTree(lchildI, offset + 4);
            }
            else {
                this.heap[rchildI] &&
                    console.log(" ".repeat(offset + 4), "-");
            }
            if (this.heap[rchildI]) {
                this.printHeapTree(rchildI, offset + 4);
            }
        }
    }
}
exports.default = MinHeap;
//# sourceMappingURL=MinHeap.js.map