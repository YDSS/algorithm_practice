/**
 * @file 98. Validate Binary Search Tree
 * @author arlenyang
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const {printBinaryTree, fullBinaryTreeArrayToTree} = require("./util/utils")

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function findMax(root) {
    if (root.right) {
        return findMax(root.right);
    }
    else {
        return root.val;
    }
}

function findMin(root) {
    if (root.left) {
        return findMin(root.left);
    }
    else {
        return root.val;
    }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    if (root == null) {
        return true;
    }

    // check the current tree node
    let isTreeValid =
        (root.left ? root.left.val < root.val : true) &&
        (root.right ? root.right.val > root.val : true);
    if (!isTreeValid) {
        return false;
    }
    // check left subtree
    if (root.left) {
        // check if val is greater than the max value in the left subtree
        // need to optimize
        let leftMax = findMax(root.left);
        if (leftMax >= root.val) {
            return false;
        }
        let isLeftValid = isValidBST(root.left);
        if (!isLeftValid) {
            return false;
        }
    }
    // check right subtree
    if (root.right) {
        // check if val is less than the min value in the right subtree
        // need to optimize
        let rightMin = findMin(root.right);
        if (rightMin <= root.val) {
            return false;
        }
        return isValidBST(root.right);
    }

    return true;
}

// [2, 1, 3]
// let arr = [2, 1, 3]
// let root = fullBinaryTreeArrayToTree(arr);
// printBinaryTree(root);

// [5,3,8,2,4,6,10,1,null,null,null,null,null,9]
// let arr = [5,3,8,2,4,6,10,1,null,null,null,null,null,9]
// let root = fullBinaryTreeArrayToTree(arr);
// printBinaryTree(root);

// [5,1,4,null,null,3,6]
// let arr = [5,1,4,null,null,3,6]
// let root = fullBinaryTreeArrayToTree(arr);
// printBinaryTree(root);

// [10,5,15,null,null,6,20]
// let arr = [10,5,15,null,null,6,20]
// let root = fullBinaryTreeArrayToTree(arr);
// printBinaryTree(root);

let arr = [3,1,5,0,2,4,6,null,null,null,3]
let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);
console.log(isValidBST(root));