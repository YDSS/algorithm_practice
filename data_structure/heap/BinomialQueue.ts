/**
 * @file implementation of binomial queue
 * @author YDSS
 *
 * Created on Sun Jul 22 2018
 */

import { HeapInterface } from "./heap";
import SiblingTreeNode from "./SiblingTreeNode";

export default class BinomialQueue {
    /**
     * store all the roots of binomial trees
     */
    public queue: SiblingTreeNode[];
    /**
     * current tree node number in the queue
     */
    size: number;
    /**
     * max tree number in the queue
     */
    maxSize: number;
    constructor(maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
        this.size = 0;
    }

    /**
     * merge the given queue into this queue 
     * @param q another queue will be merged into this queue
     */
    public merge(q: BinomialQueue): void {
        if (this.size + q.size > this.maxSize) {
            throw new Error("exceed the max size of queue after merged");
        }

        let carry = null;
        this.size += q.size;
        for (let i = 0, j = 1; j <= this.size; i++, j *= 2) {
            let r1 = this.queue[i];
            let r2 = q.queue[i];
            // 110 means got r2 and r1, has no carry
            let tag = Number(!!r2) * 4 + Number(!!r1) * 2 + Number(!!carry);

            switch (tag) {
                case 0: 
                case 1:
                    this.queue[i] = carry;
                    carry = null;
                case 2:
                    this.queue[i] = r1;
                case 3:
                    carry = this.combineTree(carry, r1);
                    this.queue[i] = null;
                case 4: 
                    this.queue[i] = r2;
                case 5:
                    carry = this.combineTree(carry, r2);
                    this.queue[i] = null;
                case 6:
                    carry = this.combineTree(r1, r2);
                    this.queue[i] = null; 
                case 7:
                    let tmp = carry;
                    carry = this.combineTree(r1, r2);
                    this.queue[i] = tmp;
            }
        }
    }

    public combineTree(
        r1: SiblingTreeNode,
        r2: SiblingTreeNode
    ): SiblingTreeNode {
        // find the smaller node, make another one to be it's child
        let smallNode = r1.data < r2.data ? r1 : r2;
        let largeNode = r1.data < r2.data ? r2 : r1;
        let lchild = smallNode.leftChild;
        smallNode.leftChild = largeNode;
        largeNode.nextSibling = lchild;

        return smallNode;
    }

    /**
     * insert a node into this queue 
     * @param data data of this node
     */
    public insert(data: any): void {
        let node = new SiblingTreeNode();
        node.data = data;
        let singleNodeQueue = new BinomialQueue(1);
        singleNodeQueue.queue[0] = node;  
        singleNodeQueue.size += 1;

        // merge this single node queue into this queue
        this.merge(singleNodeQueue);
    }

    public buildQueue(arr: number[]): void {
        arr.forEach(data => {
            this.insert(data);
        });
    }

    /**
     * delete the min data of node
     */
    // public deleteMin(): SiblingTreeNode {
         
    // }

    public print(): void {
        
    }
}
