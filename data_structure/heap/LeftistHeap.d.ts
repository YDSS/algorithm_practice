import { HeapInterface } from './heap';
import LeftistHeapNode from './LeftistHeapNode';
export default class LeftistHeap implements HeapInterface {
    /**
     * max size of the heap
     */
    maxSize: number;
    root: LeftistHeapNode;
    constructor(maxSize: number);
    /**
     * merge another heap into the current one
     *  T(n) = O(logn)
     * @param h1 the merged heap will be stored in h1
     * @param h2
     */
    static merge(h1: LeftistHeap, h2: LeftistHeap): LeftistHeap;
    private static _merge;
    insert(node: LeftistHeapNode): void;
    deleteMin(): void;
    buildHeap(arr: number[]): void;
    private static swapChildren;
}
