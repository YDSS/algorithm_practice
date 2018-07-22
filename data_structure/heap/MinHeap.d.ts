import { HeapInterface } from "./heap";
export default class MinHeap implements HeapInterface {
    /**
     * actually store elements in the heap
     */
    private heap;
    maxSize: number;
    constructor(maxSize: number);
    readonly size: number;
    buildHeap(arr: number[]): void;
    /**
     * insert an element
     * @param key
     * @return position of inserted element
     */
    insert(key: number): number;
    /**
     * delete min node
     * @return min node
     */
    deleteMin(): number;
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
     * print structure of adt
     */
    print(): void;
    private printHeapTree;
}
