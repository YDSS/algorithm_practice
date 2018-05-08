/**
 * @file prombles of tree
 * @author YDSS
 *
 * Created on Mon Apr 16 2018
 */
const { BinaryTreeNode, BinaryTree } = require('./BinaryTree');

/**
 * get hight of a binary tree
 */
function getBinaryTreeHeight(root) {
    if (!root) {
        return 0;
    }
    
    let lHeight = 0;
    let rHeight = 0;

    if (root.lchild) {
        lHeight = getBinaryTreeHeight(root.lchild);
    }
    if (root.rchild) {
        rHeight = getBinaryTreeHeight(root.rchild);
    }

    return Math.max(lHeight, rHeight) + 1;
}

function testGetBinaryTreeHeight() {
    let root = BinaryTree.mock(); 
    console.log(getBinaryTreeHeight(root));
}
testGetBinaryTreeHeight();