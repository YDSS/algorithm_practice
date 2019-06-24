/**
 * @file 95. Unique Binary Search Trees II
 * @solution
 * 1. recursion: assume f(i, j) is subtrees those contain numbers from i to j, which has many combinations, then recurse until f(1, n)
 * 2. dp: 
 * 
 * @author arlenyang
 */

const { printBinaryTree } = require("./util/utils")

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
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees2(n) {
    if (n === 0) {
        return [];
    }
    let getSubtreeCombinations = (i, j) => {
        let combinations = [];
        if (i === j) {
            combinations.push(new TreeNode(i));
            return combinations; 
        }
        if (i > j) {
            combinations.push(null); // placeholder
            return combinations;
        }
        // pivot from i to j, split the sequence into two, whose left is it's left tree's combination
        //  it's right is the same
        for (let p = i; p <= j; p++) {
            let lefts = getSubtreeCombinations(i, p - 1);
            let rights = getSubtreeCombinations(p + 1, j);
            // get all combinations between lefts and rights into a new tree
            for (let h = 0; h < lefts.length; h++) {
                for (let k = 0; k < rights.length; k++) {
                    let root = new TreeNode(p);
                    root.left = lefts[h];
                    root.right = rights[k];
                    combinations.push(root);
                }
            }
        }
        return combinations;
    }

    return getSubtreeCombinations(1, n);
}

/**
 * dp solution
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
    if (n === 0) {
        return [];
    }
    // init dp memory, dp[i][j] means roots of subtrees those contain numbers range from i to j
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
    }
    // init stats those has 1 element between i and j
    for (let i = 0; i < n; i++) {
        dp[i][i] = [new TreeNode(i + 1)]; // value of node is start from 1
    }
    // start from length equals 2 between i and j 
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = len + i - 1; // len = j - i + 1
            dp[i][j] = [];
            for (let p = i; p <= j; p++) {
                let lefts = p === i ? [null] : dp[i][p - 1];
                let rights = p === j ? [null] : dp[p + 1][j];
                for (let h = 0; h < lefts.length; h++) {
                    for (let k = 0; k < rights.length; k++) {
                        let root = new TreeNode(p + 1);
                        root.left = lefts[h];
                        root.right = rights[k]
                        dp[i][j].push(root);
                    }
                }
            }
        }
    }
    return dp[0][n - 1];
}

let n = 3;
// let n = 0;
// let n = 2;
let roots = generateTrees(n);
roots.map(r => {
    printBinaryTree(r)
    console.log('-------')
});