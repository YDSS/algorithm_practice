const { fullBinaryTreeArrayToTree, printBinaryTree } = require("./util/utils");

/**
 * @file 103. Binary Tree Zigzag Level Order Traversal
 * @author arlenyang
 */

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
 * T(n) = O(n)
 * S(n) = O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    let ret = [];
    if (!root) {
        return ret;
    }
    let curLevel = [];
    // flag to reverse order by every turn
    let reverse = true;
    curLevel.push(root);
    ret.push([root.val])
    while (curLevel.length > 0) {
        let nextLevel = [];
        let values = [];
        for (let i = curLevel.length - 1; i >= 0; i--) {
            if (reverse) {
                curLevel[i].right && nextLevel.push(curLevel[i].right) && values.push(curLevel[i].right.val)
                curLevel[i].left && nextLevel.push(curLevel[i].left) && values.push(curLevel[i].left.val)
            }
            else {
                curLevel[i].left && nextLevel.push(curLevel[i].left) && values.push(curLevel[i].left.val)
                curLevel[i].right && nextLevel.push(curLevel[i].right) && values.push(curLevel[i].right.val)
            }
        }
        reverse = !reverse;
        if (values.length) {
            ret.push(values);
        }
        curLevel = nextLevel;
    }

    return ret;
}

// let arr = [6, 7, 9, 10, 20, 6, null, 72, 6, null, 10, null, 80];
// let arr = [1]
// let arr = [1, 2]
let arr = []
let root = fullBinaryTreeArrayToTree(arr);
console.log(zigzagLevelOrder(root));