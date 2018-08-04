"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeftistHeapNode_1 = require("./LeftistHeapNode");
const utils_js_1 = require("../tree/utils.js");
class LeftistHeap {
    constructor() { }
    /**
     * merge another heap into the current one
     *  T(n) = O(logn)
     * @param h2 the heap will be merged
     */
    merge(h2) {
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
    _merge(n1, n2) {
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
    insert(data) {
        let singleNode = new LeftistHeapNode_1.default(data);
        let singleHeap = new LeftistHeap();
        singleHeap.root = singleNode;
        this.merge(singleHeap);
    }
    deleteMin() {
        if (!this.root) {
            throw new Error("Empty lefist heap");
        }
        // get min node
        let min = this.root;
        // split the left child and the right one, then merge them
        let { lchild, rchild } = this.root;
        let lchildHeap, rchildHeap;
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
    buildHeap(arr) {
        arr.forEach(data => {
            this.insert(data);
        });
    }
    swapChildren(node) {
        let tmp = node.lchild;
        node.lchild = node.rchild;
        node.rchild = tmp;
    }
    print() {
        utils_js_1.printBinaryTreeCrosswise(this.root, 0, node => {
            // console.log(node);
            return `(${node.npl})`;
        });
    }
}
exports.default = LeftistHeap;
//# sourceMappingURL=LeftistHeap.js.map