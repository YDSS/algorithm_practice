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

    /**
     * find precursor node of this node
     *  if this node doesn't have the left subtree, return null
     * 
     * @param {*} data data of current node
     * @return {BinaryTreeNode|Null}
     */
    findPrecursor(data) {
        let node = this.find(data);

        if (!node) {
            throw new Error(`node with data(${data}) is not in the tree`);
        }

        if (!node.lchild) {
            return null;
        }

        let pre = node.lchild; 
        let tmp;
        while (tmp = pre.rchild) {
            pre = tmp;
        }

        return pre;
    }

    /**
     * find successor node of this node
     *  if this node doesn't have the right subtree, return null
     * 
     * @param {*} data of current node 
     * @return {BinaryTreeNode|Null} 
     */
    findSuccessor(data) {
        let node = this.find(data);

        if (!node) {
            throw new Error(`node with data(${data}) is not in the tree`);
        }

        if (!node.rchild) {
            return null;
        }

        let pre = node.rchild; 
        let tmp;
        while (tmp = pre.lchild) {
            pre = tmp;
        }

        return pre;
    }

    _find(val, T) {
        if (!T) {
            return null;
        }

        if (val === T.data) {
            return T;
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