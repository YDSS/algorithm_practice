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
    findPrecursor(node) {
        // let node = this.find(data);

        // if (!node) {
        //     throw new Error(`node with data(${data}) is not in the tree`);
        // }

        if (!node.lchild) {
            return null;
        }

        let pre = node.lchild; 
        let tmp;
        while (tmp = pre.lchild) {
            pre = tmp;
        }

        return pre;
    }

    /**
     * find successor node of this node
     *  if this node doesn't have the right subtree, return null
     * 
     * @param {BinaryTreeNode} current node 
     * @return {BinaryTreeNode|Null} 
     */
    findSuccessor(node) {
        // let node = this.find(data);

        // if (!node) {
        //     throw new Error(`node with data(${data}) is not in the tree`);
        // }

        if (!node.rchild) {
            return null;
        }

        let suc = node.rchild; 
        let tmp;
        while (tmp = suc.lchild) {
            suc = tmp;
        }

        return suc;
    }

    /**
     * find node
     * 
     * @private
     * 
     * @param {*} val 
     * @param {BinarySearchTree} T root of this sub tree
     */
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

    delete(val) {
        this.root = this._delete(val, this.root);
    }

    /**
     * delete node
     * 
     * @private 
     * 
     * @param {*} val 
     * @param {BinaryTreeNode} T root of this sub tree
     */
    _delete(val, T) {
        // do nothing, if node not exists
        if (!T) {
            return null;
        }
        // delete in T's right subtree
        if (val > T.data) {
            T.rchild = this._delete(val, T.rchild);
            return T;
        }
        // delete in T's left subtree
        if (val < T.data) {
            T.lchild = this._delete(val, T.lchild);
            return T;
        }
        if (val === T.data) {
            // drop the node directly if it has no children
            if (!T.lchild && !T.rchild) {
                return null;
            }  
            else {
                // if node has two children, delete it's successor instead 
                //  which has one child at most 
                if (T.lchild && T.rchild) {
                    let successor = this.findSuccessor(T);
                    T.data = successor.data;
                    T.rchild = this._delete(successor.data, T.rchild);
                    return T;
                }

                if (T.lchild) {
                    return T.lchild;
                }
                else if (T.rchild) {
                    return T.rchild;
                }
                else {
                    return null;
                }
            }
        }
    }

    /**
     * recurse insert a tree node into tree
     * 
     * @private
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