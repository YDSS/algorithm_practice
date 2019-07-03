"use strict";
/**
 * @file inorder traversing binary tree by mirror, which is thought of threaded binary tree
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils/utils");
function inorderTraversingByMirror(root, cb) {
    if (root == null) {
        return;
    }
    while (root) {
        if (root.left) {
            // find predecessor of root
            let predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }
            // if predecessor has no link, set it and step down 1 step
            if (predecessor.right == null) {
                predecessor.right = root;
                root = root.left;
            }
            // if predecessor has a link, jump to root's right tree and break the link
            else {
                // it's turn of left child speak 
                cb(root);
                root = root.right;
                predecessor.right = null;
            }
        }
        // if no left child, inspect root and jump to right
        else {
            // it's turn of root itself speak
            cb(root);
            root = root.right;
        }
    }
}
let arr = [6, 4, 10, 1, 3, 7, 20, null, null, 2, null, null, null, 15];
let root = utils_1.fullBinaryTreeArrayToTree(arr);
utils_1.printBinaryTree(root);
inorderTraversingByMirror(root, node => console.log(node.data));
//# sourceMappingURL=mirrorInorderBinaryTree.js.map