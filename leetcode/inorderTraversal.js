/**
 * @file 94. Binary Tree Inorder Traversal
 * @author arlenyang
 */

const { printBinaryTree } = require("./util/utils");

class Stack {
    constructor() {
        this.arr = [];
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    push(val) {
        this.arr.push(val);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("stack is empty!");
        }

        return this.arr.splice(this.arr.length - 1, 1)[0];
    }
}

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
/**
 * non-recursive way
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    if (root == null) {
        return [];
    }
    let ret = [];
    // init stack to store traversal path
    let stack = new Stack();
    // prepare for looping
    let cur = root; // current node inspecting

    while (!stack.isEmpty() || cur != null) {
        if (cur == null) {
            // node from stack no need to inspect it's left
            cur = stack.pop();

            ret.push(cur.val);
            cur = cur.right;
        } else {
            if (cur.left != null) {
                // record the path, then dig into it's left tree
                stack.push(cur);
                cur = cur.left;
            } else {
                ret.push(cur.val);
                cur = cur.right;
            }
        }
    }

    return ret;
}

// make normal sample
let root1 = new TreeNode(1);
// let n1 = new TreeNode(2);
// let n2 = new TreeNode(3);
// let n3 = new TreeNode(4);
// let n4 = new TreeNode(5);
// let n5 = new TreeNode(6);
// root1.left = n1;
// root1.right = n2;
// n1.left = n3;
// n1.right = n4;
// n2.right = n5;
// console.log("tree:");
// printBinaryTree(root1);

// let ret = inorderTraversal(root1);
// console.log(ret);

let ret = inorderTraversal(null);
console.log(ret)