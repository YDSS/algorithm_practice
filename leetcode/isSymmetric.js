const { fullBinaryTreeArrayToTree, printBinaryTree } = require("./util/utils");

/**
 * @file 101. Symmetric Tree
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
 * recursive way
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric2(root) {
    if (!root) {
        return true;
    }
    let r = (left, right) => {
        if (left && right) {
            if (left.val !== right.val) {
                return false;
            }
        }
        if ((left && !right) || (!left && right)) {
            return false;
        }
        if (!left && !right) {
            return true;
        }
        
        return r(left.left, right.right) && r(left.right, right.left);
    }

    return r(root.left, root.right);
}

/**
 * iterately way, void translevel
 * T(n) = O(n)
 * S(n) = O(1)
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root) {
        return true;
    }
    let curLevel = [];
    curLevel.push(root.left)
    curLevel.push(root.right)
    while (curLevel.length > 0) {
        let nextLevel = [];
        for (let i = 0, j = curLevel.length - 1; i < j; i++, j--) {
            if (curLevel[i] && curLevel[j]) {
                if (curLevel[i].val !== curLevel[j].val) {
                    return false;
                }
            }
            if ((curLevel[i] && !curLevel[j]) || (!curLevel[i] && curLevel[j])) {
                return false;
            }
        }
        for (let i = 0; i < curLevel.length; i++) {
            if (curLevel[i]) {
                nextLevel.push(curLevel[i].left)
                nextLevel.push(curLevel[i].right)
            }
        }
        curLevel = nextLevel;
    }

    return true;
}

// let arr = [1, 2, 2, 3, 4, 4, 3]
let arr = [1, 2, 2, null, 3, null, 3]
let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);
console.log(isSymmetric(root));