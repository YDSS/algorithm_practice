"use strict";
/**
 * @file check if a binary tree is balance
 * @author
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BinarySearchTree_1 = require("../BinarySearchTree");
function isBalance(root) {
    let height = node => {
        if (node == null) {
            return -1;
        }
        return node.height;
    };
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
    };
    return isBalanceR(root);
}
exports.default = isBalance;
let tree = new BinarySearchTree_1.default();
// tree.build([5, 2, 1, 3, 6]); // balance tree
// tree.build([5, 3, 2, 1, 6]); // unbalance tree
// tree.build([]); // null node
tree.build([1]); // only root
tree.print(4);
console.log(isBalance(tree.root));
//# sourceMappingURL=isBalance.js.map