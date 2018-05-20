/**
 * @file implementation of binary search tree
 * @author YDSS
 *
 * Created on Mon May 14 2018
 */
const BinaryTreeNode = require('./BinaryTreeNode');

class BinarySearchTree {
    /**
     * @constructor
     * @param {Array} arr array of value of tree node
     */
    constructor(arr) {
        this.root = null;
        this.create(arr); 
    }

    create(arr) {
        arr.forEach((val, index) => {
            let node = new BinaryTreeNode(val, null, null);
            this.root = this._insert(node, this.root);
        })
    }

    /**
     * insert a node from root 
     * @param {BinaryTreeNode} node 
     */
    insert(node) {
        this._insert(node, this.root);
    }

    find(val) {
        return this._find(val, this.root);
    }

    _find(val, T) {
        console.count('bst_find');
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

    /**
     * recurse insert a tree node into tree
     * 
     * @param {BinaryTreeNode} node 
     * @param {BinarySearchTree} T
     * 
     * @return {BinarySearchTree} 
     */
    _insert(node, T) {
        if (T == null) {
            T = node;
        } 

        if (node.data > T.data) {
            T.rchild = this._insert(node, T.rchild);
        }

        if (node.data < T.data) {
            T.lchild = this._insert(node, T.lchild);
        }

        return T;
    }
}

module.exports = BinarySearchTree;