/**
 * @file 106. Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }

    let rootVal = postorder.pop();
    let root = new TreeNode(rootVal);
    let pivot = inorder.findIndex(_ => _ === rootVal);
    // split left and right trees in inorder
    let leftInorder = inorder.slice(0, pivot);
    let rightInorder = inorder.slice(pivot + 1);
    // split left and right trees in postorder
    let leftPostorder = postorder.slice(0, leftInorder.length);
    let rightPostorder = postorder.slice(leftInorder.length);
    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
}

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]

inorder = [4,5,9,3,15,20,7]
postorder=[5,4,9,15,7,20,3]


let root = buildTree(inorder, postorder)
printBinaryTree(root);