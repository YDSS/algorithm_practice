/**
 * @file 102. Binary Tree Level Order Traversal
 * @solution Obviously using queue to void translevel
 * @author arlenyang
 */

const { fullBinaryTreeArrayToTree, printBinaryTree } = require("./util/utils");
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    let ret = [];
    if (!root) {
        return ret;
    }
    let curLevel = [];
    curLevel.push(root);
    while (curLevel.length > 0) {
        let nextLevel = [];
        let vals = [];
        for (let i = 0; i < curLevel.length; i++) {
            curLevel[i].left && nextLevel.push(curLevel[i].left);
            curLevel[i].right && nextLevel.push(curLevel[i].right);
            vals.push(curLevel[i].val);
        }
        ret.push(vals);
        curLevel = nextLevel;
    }

    return ret;
}

let arr = []
// let arr = [1, 2, 2, 3, 4, 4, 3]
// let arr = [1, 2, 2, null, 3, null, 3];
let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);
console.log(levelOrder(root));
