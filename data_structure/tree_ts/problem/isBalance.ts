/**
 * @file check if a binary tree is balance
 * @author
 */

import Node from "../BinaryTreeNodeSuperclass";
import BST from "../BinarySearchTree";

export default function isBalance(root: Node): boolean {
    let height = node => {
        if (node == null) {
            return -1;
        }
        
        return node.height;
    }

    let isBalanceR = node => {
        if (node == null) {
            return true;
        }

        if (node.left == null && node.right == null) {
            node.height = 0;
            return true;
        }
        else {
            if (!isBalanceR(node.left)) {
                return false;
            }
            if (!isBalanceR(node.right)) {
                return false;
            }

            node.height = Math.max(height(node.left), height(node.right)) + 1;
            return Math.abs(height(node.left) - height(node.right)) < 2;
        }
    }

    return isBalanceR(root);
}

function isBalance2(root: Node): boolean {
    if (root == null) {
        return false;
    }
    let isBR = root => {
        if (root == null) {
            return {
                isB: true,
                height: -1
            }
        }

        // post order
        let leftTree = isBR(root.left);
        if (!leftTree.isB) {
            return {
                isB: false,
                height: -1, // doesn't matter what it is
            }
        }
        let rightTree = isBR(root.right);
        if (!rightTree.isB) {
            return {
                isB: false,
                height: -1
            }
        }
        if (Math.abs(leftTree.height - rightTree.height) > 1) {
            return {
                isB: false,
                height: -1
            }
        }        

        return {
            isB: true,
            height: Math.max(leftTree.height, rightTree.height) + 1
        }
    }

    return isBR(root).isB;
}

let tree = new BST();
// tree.build([5, 2, 1, 3, 6]); // balance tree
// tree.build([5, 3, 2, 1, 6]); // unbalance tree
// tree.build([]); // null node
tree.build([1]); // only root
tree.print(4);
console.log(isBalance2(tree.root));