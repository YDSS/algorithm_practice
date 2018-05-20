/**
 * @file implementation of binary tree
 * @author YDSS
 *
 * Created on Mon Apr 16 2018
 */

const SequenceQueue = require('../queue/SequenceQueue');
const BinaryTreeNode = require('./BinaryTreeNode');

class BinaryTree {
    /**
     * mock a tree:
     *      root
     *    a     b
     *  c   d  e  
     * f g l    h
     */
    static mock() {
        let f = new BinaryTreeNode('f', null, null);
        let g = new BinaryTreeNode('g', null, null);
        let l = new BinaryTreeNode('l', null, null);
        let h = new BinaryTreeNode('h', null, null);
        let c = new BinaryTreeNode('c', f, g);
        // let c = new BinaryTreeNode('c', null, null);
        // let d = new BinaryTreeNode('d', null, null);
        let d = new BinaryTreeNode('d', l, null);
        let e = new BinaryTreeNode('e', null, h);
        // let e = new BinaryTreeNode('e', null, null);
        let a = new BinaryTreeNode('a', c, d);
        let b = new BinaryTreeNode('b', e, null);
        
        return new BinaryTreeNode('root', a, b);
    }

    /**
     * preorder traversal
     * @param {BinaryTreeNode} root 
     * @param {Function} callback
     */
    static preOrder(root, callback) {
        if (!root) {
            return;
        }

        callback(root);
        BinaryTree.preOrder(root.lchild);
        BinaryTree.preOrder(root.rchild);
    }

    /**
     * inorder traversal
     * @param {BinaryTreeNode} root 
     * @param {Function} callback
     */
    static inOrder(root, callback) {
        if (!root) {
            return;
        }

        BinaryTree.preOrder(root.lchild);
        callback(root);
        BinaryTree.preOrder(root.rchild);
    }

    /**
     * postorder traversal
     * @param {BinaryTreeNode} root 
     * @param {Function} callback
     */
    static postOrder(root, callback) {
        if (!root) {
            return;
        }

        BinaryTree.preOrder(root.lchild);
        BinaryTree.preOrder(root.rchild);
        callback(root);
    }

    /**
     * level traversal
     * @param {BinaryTreeNode} root 
     * @param {Function} callback
     */
    static translevel(root, callback) {
        let queue = new SequenceQueue(20);
        queue.enter(root);

        while (!queue.isEmpty()) {
            let node = queue.leave();
            callback(node);

            if (node.lchild) {
                queue.enter(node.lchild);
            }
            if (node.rchild) {
                queue.enter(node.rchild);
            }
        }
    }
}

module.exports = BinaryTree;