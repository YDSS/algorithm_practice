import { HeapInterface } from './heap';
import LeftistHeapNode from './LeftistHeapNode';

export default class LeftistHeap implements HeapInterface {
    /**
     * max size of the heap
     */
    maxSize: number;
    root: LeftistHeapNode;

    constructor(maxSize: number) {
        this.maxSize = maxSize; 
    }

    /**
     * merge another heap into the current one
     *  T(n) = O(logn)
     * @param h1 the merged heap will be stored in h1
     * @param h2
     */
    public static merge(h1: LeftistHeap, h2: LeftistHeap): LeftistHeap {
        if (h1 == null) {
            return h2;
        }
        if (h2 == null) {
            return h1;
        }

        let h1Root = h1.root;
        let h2Root = h2.root;
        
        if (h1Root.data > h2Root.data) {
            h1.root = LeftistHeap._merge(h2Root, h1Root);
        }
        else {
            h1.root = LeftistHeap._merge(h1Root, h2Root);
        }
        
        h1.maxSize = h1.maxSize + h2.maxSize;

        return h1;
    }

    private static _merge(n1: LeftistHeapNode, n2: LeftistHeapNode): LeftistHeapNode {
        if (n1 == null) {
            return n2;
        }
        if (n2 == null) {
            return n1;
        }
        if (n1.data > n2.data) {
            return this._merge(n2, n1);
        }

        if (n1.lchild == null) {
            n1.lchild = n2;
        }
        else {
            n1.rchild = this._merge(n1.rchild, n2);
            if (n1.lchild.npl < n1.rchild.npl) {
                this.swapChildren(n1);
            }
            n1.npl = n1.rchild.npl + 1;
        }

        return n1;
    }

    public insert(node: LeftistHeapNode) {

    }

    public deleteMin() {
        
    }

    public buildHeap(arr: number[]) {

    }

    private static swapChildren(node: LeftistHeapNode) {
        let tmp = node.lchild;
        node.lchild = node.rchild;
        node.rchild = tmp;
    }
}