/**
 * @file Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 * @author arlenyang
 */

const { printBinaryTree} = require('./util/utils')

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
 * preorder traverse, recursion
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    let ret = true;
    let preorderTraverse = (p, q) => {
        if (!ret) { // stop if appeared different nodes before
            return;
        }
        if (p == null || q == null) { // if got null node
            if (p != q) { // p or q is not null node
                ret = false;
            }
            return;
        }
        if (p.val !== q.val) {
            ret = false;
            return;
        }
        // compare left tree
        preorderTraverse(p.left, q.left);
        // compare right tree
        preorderTraverse(p.right, q.right);
    }    

    preorderTraverse(p, q);
    return ret;
}

// make normal sample
// tree 1
// let root1 = new TreeNode(1);
// let n1 = new TreeNode(2);
// let n2 = new TreeNode(3);
// let n3 = new TreeNode(10);
// let n4 = new TreeNode(9);
// let n5 = new TreeNode(6);
// root1.left = n1;
// root1.right = n2;
// n1.left = n3;
// n1.right = n4;
// n2.right = n5;
// console.log('tree 1:')
// printBinaryTree(root1)
// // tree 2
// let root2 = new TreeNode(1)
// let n6 = new TreeNode(2);
// let n7 = new TreeNode(3);
// let n8 = new TreeNode(10);
// let n9 = new TreeNode(9);
// let n10 = new TreeNode(6);
// root2.left = n6;
// root2.right = n7;
// n6.left = n8;
// n6.right = n9;
// n7.left= n10;
// console.log('tree 2:')
// printBinaryTree(root2)
// console.log(isSameTree(root1, root2))

// make edge sample
let root1 = null;
let root2 = new TreeNode(1);
// console.log(isSameTree(root1, root2));
console.log(isSameTree(null, null));