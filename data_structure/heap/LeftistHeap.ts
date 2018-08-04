import { HeapInterface } from "./heap";
import LeftistHeapNode from "./LeftistHeapNode";
import {  printBinaryTreeCrosswise } from '../tree/utils.js';

export default class LeftistHeap implements HeapInterface {
    root: LeftistHeapNode;

    constructor() {}

    /**
     * merge another heap into the current one
     *  T(n) = O(logn)
     * @param h2 the heap will be merged
     */
    public merge(h2: LeftistHeap) {
        if (h2 == null) {
            return;
        }
        let h1Root = this.root;
        let h2Root = h2.root;
        if (h2Root == null) {
            return;
        }
        if (h1Root == null) {
            this.root = h2Root;
            return;
        }

        this.root = this._merge(h1Root, h2Root);
    }

    private _merge(n1: LeftistHeapNode, n2: LeftistHeapNode): LeftistHeapNode {
        if (n1 == null) {
            return n2;            
        }
        if (n2 == null) {
            return n1;
        }

        if (n1.data > n2.data) {
            return this._merge(n2, n1);
        }

        // npl of n1 is not changed in this situation
        if (n1.lchild == null) {
            n1.lchild = n2;
        } else {
            n1.rchild = this._merge(n1.rchild, n2);
            if (n1.lchild.npl < n1.rchild.npl) {
                this.swapChildren(n1);
            }
            n1.npl = n1.rchild.npl + 1;
        }

        return n1;
    }

    public insert(data: any) {
        let singleNode = new LeftistHeapNode(data);
        let singleHeap = new LeftistHeap();
        singleHeap.root = singleNode;
        
        this.merge(singleHeap); 
    }

    public deleteMin(): LeftistHeapNode {
        if (!this.root) {
            throw new Error("Empty lefist heap");
        }
        
        // get min node
        let min: LeftistHeapNode = this.root;
        // split the left child and the right one, then merge them
        let { lchild, rchild } = this.root;
        let lchildHeap: LeftistHeap, rchildHeap: LeftistHeap;
        if (!lchild && !rchild) {
            this.root = null;
            return;
        }

        if (lchild) {
            lchildHeap = new LeftistHeap();
            lchildHeap.root = lchild;
        }
        if (rchild) {
            rchildHeap = new LeftistHeap();
            rchildHeap.root = rchild;
        }
        if (lchildHeap) {
            lchildHeap.merge(rchildHeap);
            this.root = lchildHeap.root;
        }
        else {
            rchildHeap.merge(lchildHeap);
            this.root = rchildHeap.root;
        }

        return min;
    }

    public buildHeap(arr: any[]) {
        arr.forEach(data => {
            this.insert(data); 
        });
    }

    private swapChildren(node: LeftistHeapNode) {
        let tmp = node.lchild;
        node.lchild = node.rchild;
        node.rchild = tmp;
    }

    public print() {
        printBinaryTreeCrosswise(this.root, 0, node => {
            // console.log(node);
            return `(${node.npl})`
        });
    }
}
