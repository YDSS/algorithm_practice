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
    private queue: SiblingTreeNode[];
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

    public merge(q: BinomialQueue): void {
        if (this.size + q.size > this.maxSize) {
            throw new Error("exceed the max size of queue after merged");
        }

        let carry = null;
        this.size += q.size;
        for (let i = 0, j = 1; j <= this.size; i++, j *= 2) {
            let r1 = this.queue[i];
            let r2 = q[i];
        }
    }

    public combineTree(
        r1: SiblingTreeNode,
        r2: SiblingTreeNode
    ): SiblingTreeNode {
        if (!r1) {
            return r2;
        }
        if (!r2) {
            return r1;
        }

        // find the smaller node, make another one to be it's child
        let smallNode = r1.data < r2.data ? r1 : r2;
        let largeNode = r1.data < r2.data ? r2 : r1;
        let lchild = smallNode.leftChild;
        smallNode.leftChild = largeNode;
        largeNode.nextSibling = lchild;

        return smallNode;
    }

    public insert(data: any): any {}

    // public deleteMin(): SiblingTreeNode {

    // }
}
