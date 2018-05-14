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
        this.create(arr); 
        this.root = null;
    }

    create(arr) {
        arr.forEach((val, index) => {
            let node = new BinaryTreeNode(val, null, null);
            if (index === 0) {
                this.root = this.insert(node, null); 
                return;
            }

            this.root = this.insert(node, this.root);
        })
    }

    /**
     * insert a tree node into tree
     * 
     * @param {BinaryTreeNode} node 
     * @param {BinarySearchTree} T
     * 
     * @return {BinarySearchTree} 
     */
    insert(node, T) {
        if (T == null) {
            T = node;
        } 

        if (node.data > T.data) {
            T.rchild = this.insert(node, T.rchild);
        }

        if (node.data < T.data) {
            T.lchild = this.insert(node, T.lchild);
        }

        return T;
    }
}

module.exports = BinarySearchTree;