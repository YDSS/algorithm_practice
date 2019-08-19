/**
 * @file 98. Validate Binary Search Tree
 * @author arlenyang
 * @solution
 *  1. check root.val >= max(root.left) and root.val <= min(root.right)
 *  2. inorder traversing a BST will get a sorted arr, so if it's not sorted, then it's not valid
 *  3. preorder to limit the range of nodes in subtree 
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
 * preorder way, duplicate calculation in findMax and findMin
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST2(root) {
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

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
//     // minium val in the tree which current node is its root
//     this.min = Number.POSITIVE_INFINITY;
//     // maxium val in the tree which current node is its root
//     this.max = Number.NEGATIVE_INFINITY;
// }

/**
 * record the min and max val of current tree, which cost extra O(n) space
 * 
 * postorder way, but has extra space to save min and max attrs
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    if (root == null) {
        return true;
    }
    // check if left subtree is valid BST
    // if left subtree is not existed, then the min val is root itself
    if (!root.left) {
        root.min = root.val;
    }
    else {
        // val of root must greater than the maxium of its left subtree
        if (!isValidBST(root.left) || root.val <= root.left.max) {
            return false;
        }
        root.min = root.left.min;
    }
    // check if right subtree is valid BST
    // if right subtree is not existed, then the max val is root itself
    if (!root.right) {
        root.max = root.val;
    }
    else {
        // val of root must smaller than the minium of its right subtree
        if (!isValidBST(root.right) || root.val >= root.right.min) {
            return false;
        }
        root.max = root.right.max;
    }

    return true;
}

/**
 * preorder way
 * 
 * T(n) = O(n)
 * S(n) = O(1)
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST3(root) {
    let preorder = (root, min, max) => {
        if (root == null) {
            return true;
        }
        if (root.val >= max || root.val <= min) {
            return false;
        }

        return preorder(root.left, min, root.val) && preorder(root.right, root.val, max);
    }

    return preorder(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

// [2, 1, 3]
// let arr = [2, 1, 3]
// let root = fullBinaryTreeArrayToTree(arr);

// [5,3,8,2,4,6,10,1,null,null,null,null,null,9]
// let arr = [5,3,8,2,4,6,10,1,null,null,null,null,null,9]
// let root = fullBinaryTreeArrayToTree(arr);

// [5,1,4,null,null,3,6]
// let arr = [5,1,4,null,null,3,6]
// let root = fullBinaryTreeArrayToTree(arr);

// [10,5,15,null,null,6,20]
// let arr = [10,5,15,null,null,6,20]
// let root = fullBinaryTreeArrayToTree(arr);

let arr = [3,1,5,0,2,4,6,null,null,null,3]
let root = fullBinaryTreeArrayToTree(arr);

// let arr = [];
// let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);
console.log(isValidBST3(root));
console.log(isValidBST(root));
// printBinaryTree(root, ['min', 'max']);