const {
    Stack,
    fullBinaryTreeArrayToTree,
    printBinaryTree
} = require("./util/utils");

/**
 * @file 99. Recover Binary Search Tree
 * @solution the key is that inorder traversing a BST gets a ascending ordered array, so we can find the two swapped nums in this array
 * @author arlenyang
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * inorder without recursion
 * T(n) = O(n)
 * S(n) = O(H), H is the height of tree, which is the cost of space by recursion
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function recoverTree2(root) {
    let pred, x, y;
    let stack = new Stack();

    while (!stack.isEmpty() || root) {
        if (root == null) {
            root = stack.pop();
        } else {
            if (root.left) {
                stack.push(root);
                root = root.left;
                continue;
            }
        }
        if (pred && pred.val > root.val) {
            y = root;
            if (x == null) {
                x = pred;
            } else {
                break;
            }
        }
        pred = root;
        root = root.right;
    }
    swap(x, y);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function swap(x, y) {
    let tmp = x.val;
    x.val = y.val;
    y.val = tmp;
}

/**
 * inorder by mirror traversing, which uses the empty right child to store predecessor
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function recoverTree(root) {
    let pred, x, y;
    while (root) {
        if (root.left) {
            // find predecessor of root
            let predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }
            // predecessor has no link yet,
            // set link and step one level down
            if (predecessor.right == null) {
                predecessor.right = root;
                root = root.left;
            }
            // predecessor has link,
            // break it and jump to root's right
            else {
                // it's turn of root speaking
                if (pred && pred.val > root.val) {
                    y = root;
                    // this time we can not break, cause we need restore all the link in the empty right child
                    if (x == null) {
                        x = pred;
                    }
                }
                predecessor.right = null;
                pred = root;
                root = root.right;
            }
        }
        // it's turn of left child speaking
        // then jump to it's right
        else {
            if (pred && pred.val > root.val) {
                y = root;
                if (x == null) {
                    x = pred;
                }
            }
            pred = root;
            root = root.right;
        }
    }
    swap(x, y)
}

// let arr = [5, 2, 8, 1, 3, 6, 10, null, null, null, null, null, null, 7, 20];
let arr =[1,3,null,null,2] 
let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);
recoverTree(root);
printBinaryTree(root);
