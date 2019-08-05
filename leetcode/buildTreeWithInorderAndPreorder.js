/**
 * @file 105. Construct Binary Tree from Preorder and Inorder Traversal
 * @author arlenyang
 */
const { printBinaryTree } = require('./util/utils')
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    // find root in inorder
    let i = 0;
    while (inorder[i] !== rootVal) {
        i++;
    }
    // get left and right tree in inorder
    let leftTreeInorder = inorder.slice(0, i);
    let rightTreeInorder = inorder.slice(i + 1);
    // get left and right tree in preorder
    let leftTreeLen = leftTreeInorder.length;
    let leftTreePreorder = preorder.slice(1, 1 + leftTreeLen);
    let rightTreePreorder = preorder.slice(leftTreeLen + 1);
    // build left and right tree
    root.left = buildTree(leftTreePreorder, leftTreeInorder);
    root.right = buildTree(rightTreePreorder, rightTreeInorder);

    return root;
}

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
preorder = [10, 9, 5, 11, 7, 3, 8, 21, 22, 20, 12]
inorder = [5,9,7,11,10,21,8,22,3,20,12]

let root = buildTree(preorder, inorder);
printBinaryTree(root);