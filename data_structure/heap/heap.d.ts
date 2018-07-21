export interface HeapNode {
}
export declare abstract class HeapAbstract {
}
export interface HeapInterface {
    /**
     * insert a node
     */
    insert(key: number): number;
    /**
     * delete min node
     */
    deleteMin(): number;
    /**
     * build heap
     */
    buildHeap(arr: number[]): void;
}
