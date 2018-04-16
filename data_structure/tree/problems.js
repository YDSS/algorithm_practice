/**
 * @file prombles of tree
 * @author YDSS
 *
 * Created on Mon Apr 16 2018
 */
const { BinaryTreeNode, BinaryTree } = require('./BinaryTree');

let height = 1;
/**
 * get hight of a binary tree
 */
function getBinaryTreeHeight(root) {
    if (!root) {
        return 0;
    }
    
    let lHeight;
    let rHeight;

    if (root.lchild) {
        lHeight = getBinaryTreeHeight(root.lchild);
    }
    if (root.rchild) {
        rHeight = getBinaryTreeHeight(root.rchild);
    }

    return Math.max(lHeight, rHeight);
}