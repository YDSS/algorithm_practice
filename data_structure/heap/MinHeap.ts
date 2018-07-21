import { HeapAbstract, HeapInterface } from "./heap";

/**
 * direction of child of the element
 */
enum Direction {
    Left,
    Right
}

export default class MinHeap implements HeapInterface {
    /**
     * actually store elements in the heap
     */
    private heap: number[] = [Number.NEGATIVE_INFINITY];

    constructor() {}

    public buildHeap(arr: number[]): void {
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

        let lchildI = this.findChild(i, Direction.Left);
        let rchildI = this.findChild(i, Direction.Right);
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
            let lchildI = this.findChild(i, Direction.Left);
            let rchildI = this.findChild(i, Direction.Right);

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
    private findChild(i: number, direction: Direction): number {
        if (direction === Direction.Left) {
            return 2 * i;
        }
        if (direction === Direction.Right) {
            return 2 * i + 1;
        }
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
     * print structure of adt
     */
    public print(): void {
        this.printHeapTree(1, 4);
    }

    private printHeapTree(i: number, offset: number): void {
        if (this.heap[i] != null) {
            console.log(" ".repeat(offset), this.heap[i]);

            if (this.heap[this.findChild(i, Direction.Left)]) {
                this.printHeapTree(
                    this.findChild(i, Direction.Left),
                    offset + 4
                );
            } else {
                this.heap[this.findChild(i, Direction.Right)] &&
                    console.log(" ".repeat(offset + 4), "-");
            }
            if (this.heap[this.findChild(i, Direction.Right)]) {
                this.printHeapTree(
                    this.findChild(i, Direction.Right),
                    offset + 4
                );
            }
        }
    }
}
