import { HeapInterface } from "./heap";
import LeftistHeapNode from "./LeftistHeapNode";
export default class LeftistHeap implements HeapInterface {
    root: LeftistHeapNode;
    constructor();
    /**
     * merge another heap into the current one
     *  T(n) = O(logn)
     * @param h2 the heap will be merged
     */
    merge(h2: LeftistHeap): void;
    private _merge;
    insert(data: any): void;
    deleteMin(): LeftistHeapNode;
    buildHeap(arr: any[]): void;
    private swapChildren;
    print(): void;
}
