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
                    break;
                case 1:
                    this.queue[i] = carry;
                    carry = null;
                    break;
                case 2:
                    this.queue[i] = r1;
                    break;
                case 3:
                    carry = this.combineTree(carry, r1);
                    this.queue[i] = null;
                    break;
                case 4: 
                    this.queue[i] = r2;
                    break;
                case 5:
                    carry = this.combineTree(carry, r2);
                    this.queue[i] = null;
                    break;
                case 6:
                    carry = this.combineTree(r1, r2);
                    this.queue[i] = null; 
                    break;
                case 7:
                    let tmp = carry;
                    carry = this.combineTree(r1, r2);
                    this.queue[i] = tmp;
                    break;
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
    public deleteMin(): SiblingTreeNode {
        if (this.size === 0) {
            throw new Error("Empty binomial queue");
        }

        // find the smallest node
        let minNode;
        let minNodeIndex;
        this.queue.forEach((root, i) => {
            if (!root) {
                return;
            }

            if (!minNode) {
                minNode = root;
                minNodeIndex = i;
                return;
            }

            if (minNode.data > root.data) {
                minNode = root;
                minNodeIndex = i;
            }
        });
        // remove the tree has the smallest node from the original queue
        this.queue[minNodeIndex] = null;
        this.size -= (1 << minNodeIndex);
        // split the smallest tree from root, combine to a new binomialqueue
        let child = minNode.leftChild;
        if (!child) {
            return minNode;
        }

        let minTreeQueue = new BinomialQueue(minNodeIndex - 1);
        minTreeQueue.size = (1 << minNodeIndex) - 1;
        for (let i = minNodeIndex - 1; i >= 0; i--) {
            minTreeQueue.queue[i] = child;
            let nextSibling = child.nextSibling;
            // remove sibling relationship
            child.nextSibling = null;
            child = nextSibling;
        }
        // merge the new binomialqueue into the original queue
        this.merge(minTreeQueue);
        return minNode;
    }

    /**
     * print all the trees in the queue
     */
    public print(): void {
        this.queue.forEach((root, i) => {
            console.log(`pos: ${i}:`); 
            this._print(root, 4);
        });
    }

    private _print(node, offset): void {
        if (!node) {
            return;
        }

        console.log(" ".repeat(offset), node.data);

        if (node.leftChild) {
            this._print(node.leftChild, offset + 4);
        }

        if (node.nextSibling) {
            this._print(node.nextSibling, offset);
        } 
    }
}
