const { fullBinaryTreeArrayToTree, printBinaryTree } = require("./util/utils");

/**
 * @file 113. Path Sum II
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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root, sum) {
    let paths = [];
    if (root == null) {
        return paths;
    }
    let dfs = (root, curPath, curSum, sum) => {
        curSum += root.val;

        if (isLeaf(root)) {
            if (curSum === sum) {
                curPath.push(root.val);
                paths.push(clone(curPath));
                curPath.pop();
            }

            return;
        }

        curPath.push(root.val);
        root.left != null && dfs(root.left, curPath, curSum, sum);
        root.right != null && dfs(root.right, curPath, curSum, sum);
        curPath.pop();
    };

    dfs(root, [], 0, sum);
    return paths;
}

function isLeaf(root) {
    return root.left == null && root.right == null;
}

function clone(arr) {
    return arr.map(_ => _);
}

// let arr = [1, -2, -3, 1, 3, -2, null, -1];
// let sum = -1;
let arr = [1,2]
let sum = 1;

let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);
console.log(pathSum(root, sum));
