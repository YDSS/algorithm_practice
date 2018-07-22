import { HeapInterface } from "./heap";

export default class MinHeap implements HeapInterface {
    /**
     * actually store elements in the heap
     */
    private heap: number[] = [Number.NEGATIVE_INFINITY];
    public maxSize: number;

    constructor(maxSize: number) {
        this.maxSize = maxSize;
    }

    get size(): number {
        return this.heap.length - 1;
    }

    public buildHeap(arr: number[]): void {
        if (arr.length > this.maxSize) {
            throw new Error("built array exceed max size of the heap");
        }

        arr.forEach((item, index) => {
            this.heap[index+1] = item;
        });

        for (let i = Math.floor(this.heap.length / 2); i > 0; i--) {
            // this.percolateDownR(i);
            this.percolateDown(i);
        }
    }

    /**
     * insert an element 
     * @param key 
     * @return position of inserted element
     */
    public insert(key: number): number {
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
     * @return min node
     */
    public deleteMin(): number {
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
     * percolate down by recursion
     * @param i index of the element in the heap
     */
    private percolateDownR(i: number): void {
        if (i * 2 > this.heap.length) {
            return;
        }

        let [lchildI, rchildI] = this.findChild(i);
        // let rchildI = this.findChild(i, Direction.Right);
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
    private percolateDown(i: number): void {
        let cur = this.heap[i];
        while (i * 2 < this.heap.length) {
            let [lchildI, rchildI] = this.findChild(i);
            // let lchildI = this.findChild(i, Direction.Left);
            // let rchildI = this.findChild(i, Direction.Right);

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
    private findParent(i: number): number {
        return Math.floor(i / 2);
    }

    /**
     * find child of the element
     * @param i index of the element in the heap
     * @param direction direction of child of the element
     */
    private findChild(i: number): number[] {
        let lchildIndex = 2 * i;
        let rchildIndex = lchildIndex + 1;

        return [lchildIndex, rchildIndex];
    }

    /**
     * swap two elements in the heap
     * @param x
     * @param y
     */
    private swap(x: number, y: number) {
        let tmp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = tmp;
    }

    /**
     * determine whether the heap is full
     */
    public isFull(): boolean {
        return this.size === this.maxSize;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * print structure of adt
     */
    public print(): void {
        this.printHeapTree(1, 0);
    }

    private printHeapTree(i: number, offset: number): void {
        if (this.heap[i] != null) {
            console.log(" ".repeat(offset), this.heap[i]);
            let [lchildI, rchildI] = this.findChild(i);

            if (this.heap[lchildI]) {
                this.printHeapTree(
                    lchildI,
                    offset + 4
                );
            } else {
                this.heap[rchildI] &&
                    console.log(" ".repeat(offset + 4), "-");
            }
            if (this.heap[rchildI]) {
                this.printHeapTree(
                    rchildI,
                    offset + 4
                );
            }
        }
    }
}
