/**
 * @file implementation of binomial queue
 * @author YDSS
 *
 * Created on Sun Jul 22 2018
 */

import { HeapInterface } from './heap';
import SiblingTreeNode from './SiblingTreeNode';

export default class BinomialQueue {
    /**
     * store all the roots of binomial trees
     */
    private queue: SiblingTreeNode[];
    /**
     * current trees number in the queue
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
        let carry = null;
        
    }

    public insert(data: any): any {

    }

    // public deleteMin(): SiblingTreeNode {

    // }
}