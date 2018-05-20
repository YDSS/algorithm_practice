/**
 * @file implementation of avl tree
 * @author YDSS
 *
 * Created on Sun May 20 2018
 */
const BinaryTreeNode = require("./BinaryTreeNode");

class AVLTree {
    /**
     * @constructor
     * @param {Array} arr
     */
    constructor(arr) {
        this.root = null;
        this.create(arr);
    }

    create(arr) {
        arr.forEach((val, index) => {
            let node = new BinaryTreeNode(val, null, null);
            this.root = this._insert(node, this.root);
        });
    }

    find(val) {
        return this._find(val, this.root);
    }

    _find(val, T) {
        console.count('avl_find');
        if (val === T.data) {
            return true;
        } 
        if (val > T.data) {
            return this._find(val, T.rchild);
        }
        if (val < T.data) {
            return this._find(val, T.lchild);
        }
    }

    insert(node) {
        this.root = this._insert(node, this.root);
    }

    _insert(node, T) {
        if (T == null) {
            T = node;
            T.height = 0;
        }

        if (node.data < T.data) {
            T.lchild = this._insert(node, T.lchild);
            if (height(T.lchild) - height(T.rchild) === 2) {
                if (node.data < T.lchild.data) {
                    T = this._singleRotateWithLeft(T);
                }                
                else {
                    T = this._doubleRotateWithLeft(T)
                }
            }
        }
        else if (node.data > T.data) {
            T.rchild = this._insert(node, T.rchild);
            if (height(T.rchild) - height(T.lchild) === 2) {
                if (node.data > T.rchild.data) {
                    T = this._singleRotateWithRight(T);
                }
                else {
                    T = this._doubleRotateWithRight(T);
                }
            }
        }
        // do nothing when node.data === T.data
        T.height = Math.max(height(T.lchild), height(T.rchild)) + 1; 

        return T;
    }

    _singleRotateWithLeft(T) {
        let root = T.lchild;

        T.lchild = root.rchild;
        root.rchild = T;

        T.height = Math.max(height(T.lchild), height(T.rchild)) + 1;
        root.height = Math.max(height(root.lchild), height(root.rchild)) + 1;

        return root;
    }

    _singleRotateWithRight(T) {
        let root = T.rchild;
        
        T.rchild = root.lchild;
        root.lchild = T;

        T.height = Math.max(height(T.lchild), height(T.rchild)) + 1;
        root.height = Math.max(height(root.lchild), height(root.rchild)) + 1;

        return root;
    }

    _doubleRotateWithLeft(T) {
        T.lchild = this._singleRotateWithRight(T.lchild);
        return this._singleRotateWithLeft(T);
    }

    _doubleRotateWithRight(T) {
        T.rchild = this._singleRotateWithLeft(T.rchild);
        return this._singleRotateWithRight(T);
    }
}

function height(node) {
    if (node == null) {
        return -1;
    }

    return node.height;
}

module.exports = AVLTree;