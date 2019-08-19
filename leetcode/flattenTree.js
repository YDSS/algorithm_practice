
/**
 * @file 114. Flatten Binary Tree to Linked List
 * @author arlenyang
 */

const { fullBinaryTreeArrayToTree, printBinaryTree} = require('./util/utils')

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
class Stack {
    constructor() {
        this._list = [];
    }

    push(val) {
        this._list.push(val);
    }

    pop() {
        if (this.isEmpty()) {
            return -1;
        }

        let deleted = this._list.splice(this._list.length - 1, 1);

        return deleted[0];
    }

    isEmpty() {
        return this._list.length === 0;
    }

    print() {
        console.log(this._list);
    }
}
/**
 * S(n) = O(n)
 * T(n) = O()
 * solution: always put the left tree node into right tree. 
 *  1. start from root
 *  2. if one node has left tree, swap its left and right tree, and put the node into stack, dig deep to its right tree
 *  3. if reach a null node, pop the stack, and find a node with left tree, then put the left tree after the successor of this node, and dig deep its right tree
 *  4. when stack is empty and current node is null, stop the loop, and the nodes will stand in line linked by right node
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    if (root == null) {
        return root;
    }
    let node = root;
    let stack = new Stack();
    while (node != null || !stack.isEmpty()) {
        if (node != null) {
            if (node.left != null) {
                swapChildren(node);
            }
            // dig deep to its right
            stack.push(node);
            node = node.right;
        }
        else {
            node = stack.pop();
            // find a node with left tree
            while (node.left == null && !stack.isEmpty()) {
                node = stack.pop();
            }
            // no node has left tree, means it's completed early
            if (stack.isEmpty() && node.left == null) {
                break;
            }
            // put left tree after its successor
            let left = node.left;
            node.left = null;
            // find successor
            let successor = node;
            while (successor.right != null) {
                successor = successor.right;
            }
            successor.right = left;
            node = successor.right;
        }
    }
}

function swapChildren(root) {
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
}

// let arr = [1,2,3,4,5,null,6,null,null,7]
let arr = [1,2,5,3,4,null,6]
let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);

flatten(root);
printBinaryTree(root);