export declare abstract class HeapAbstract {
}
export interface HeapInterface {
    /**
     * insert a node
     */
    insert(key: any): any;
    /**
     * delete min node
     */
    deleteMin(): any;
    /**
     * build heap
     */
    buildHeap(arr: any[]): void;
}
