/**
 * @file get height of one tree node
 * @author arlenyang
 */

import BinaryTreeNode from "../BinaryTreeNode";
import { fullBinaryTreeArrayToTree, printBinaryTree } from "../../utils/utils"
import Stack from "../../stack/Stack"

/**
 * post order way
 * @param root 
 */
function getHeight(root: BinaryTreeNode): number {
    if (root == null) {
        return -1;
    }    
    
    let leftH = getHeight(root.left);
    let rightH = getHeight(root.right);
    return Math.max(leftH, rightH) + 1;
}

/**
 * dfs way
 * @param root 
 */
function getHeight2(root: BinaryTreeNode): number {
    let max = -1;
    let dfs = (root, curH) => {
        if (root == null) {
            if (curH > max) {
                max = curH;
            }
            return;
        }
        dfs(root.left, curH + 1); 
        dfs(root.right, curH + 1); 
    }
    dfs(root, max);

    return max;
}

/**
 * non-recursive way
 * @param root 
 */
function getHeight3(root) {
    if (root == null) {
        return -1;
    }
    let stack = new Stack(100);
    let node = root;
    while (node != null || !stack.isEmpty()) {
        if (node != null) {
            // check itself
            if (
                (node.left == null || node.left.height != null) &&
                (node.right == null || node.right.height != null)
            ) {
                node.height =
                    Math.max(
                        node.left == null ? -1 : node.left.height,
                        node.right == null ? -1 : node.right.height
                    ) + 1;
                node = null;
            }
            else if (node.left != null && node.left.height == null) {
                stack.push(node);
                node = node.left;
            } else if (node.right != null && node.right.height == null) {
                stack.push(node);
                node = node.right;
            } 
            // leaf node
            else {
                node.height = 0;
                node = null;
            }
        }
        else {
            node = stack.pop();
        }
    }

    return root.height;
}

let arr = [1,2,3,4,5,null,null,null,null,6];
// let arr = [1,2,3,4,5]
let root = fullBinaryTreeArrayToTree(arr);
printBinaryTree(root);
console.log(getHeight3(root))