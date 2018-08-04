/**
 * @file implementation of binomial queue
 * @author YDSS
 *
 * Created on Sun Jul 22 2018
 */
import SiblingTreeNode from "./SiblingTreeNode";
export default class BinomialQueue {
    /**
     * store all the roots of binomial trees
     */
    queue: SiblingTreeNode[];
    /**
     * current tree node number in the queue
     */
    size: number;
    /**
     * max tree number in the queue
     */
    maxSize: number;
    constructor(maxSize: any);
    /**
     * merge the given queue into this queue
     * @param q another queue will be merged into this queue
     */
    merge(q: BinomialQueue): void;
    combineTree(r1: SiblingTreeNode, r2: SiblingTreeNode): SiblingTreeNode;
    /**
     * insert a node into this queue
     * @param data data of this node
     */
    insert(data: any): void;
    buildQueue(arr: number[]): void;
    /**
     * delete the min data of node
     */
    deleteMin(): SiblingTreeNode;
    /**
     * print all the trees in the queue
     */
    print(): void;
}
