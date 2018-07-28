/**
 * @file implementation of minheap
 * @author YDSS
 *
 * Created on Sun Jul 22 2018
 */
import { HeapInterface } from "./heap";
export default class MinHeap implements HeapInterface {
    /**
     * actually store elements in the heap,
     *   preset a element of negative infinity at the top of the heap,
     *   it's a mark that help us percolate up
     */
    private heap;
    maxSize: number;
    constructor(maxSize: number);
    readonly size: number;
    /**
     * build a heap with an array of numbers
     *  T(n) = O(n)
     * @param arr
     */
    buildHeap(arr: number[]): void;
    /**
     * insert an element
     *  T(n) = O(logn)
     * @param key
     * @return position of inserted element
     */
    insert(key: number): number;
    /**
     * delete min node
     *  T(n) = O(logn)
     * @return min node
     */
    deleteMin(): number;
    /**
     * merge two min heap
     * @param h1 heap be merged, will store the merged heap
     * @param h2 heap be merged
     */
    static merge(h1: any, h2: any): void;
    /**
     * percolate down by recursion
     * @param i index of the element in the heap
     */
    private percolateDownR;
    /**
     * percolate down by non-recursion
     */
    private percolateDown;
    /**
     * find parent of the element in the heap
     * @param i index of the element in the heap
     */
    private findParent;
    /**
     * find child of the element
     * @param i index of the element in the heap
     * @param direction direction of child of the element
     */
    private findChild;
    /**
     * swap two elements in the heap
     * @param x
     * @param y
     */
    private swap;
    /**
     * determine whether the heap is full
     */
    isFull(): boolean;
    /**
     * determine whether the heap is empty
     */
    isEmpty(): boolean;
    /**
     * print structure of adt
     */
    print(): void;
    private printHeapTree;
}
