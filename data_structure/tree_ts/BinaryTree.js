"use strict";
/**
 * @file binary tree, super class
 * @author arlenayng
 */
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryTree {
    constructor() {
        this.root = null;
    }
    /**
     * calculate the height of tree
     * @param tree
     *
     * @return {number}
     */
    calcHeight(tree) {
        if (tree == null) {
            return Number.NEGATIVE_INFINITY;
        }
        if (this.isLeaf(tree)) {
            return 0;
        }
        let leftTreeHeight = this.calcHeight(tree.left);
        let rightTreeHeight = this.calcHeight(tree.right);
        return Math.max(leftTreeHeight, rightTreeHeight) + 1;
    }
    /**
     * determining whether the node is a leaf
     * @param node
     */
    isLeaf(node) {
        return node.left == null && node.right == null;
    }
    /**
     * print the tree
     * @param OFFSET offset between parent node and child node when print
     */
    print(OFFSET) {
        let printR = (tree, offset) => {
            if (tree == null) {
                return;
            }
            console.log(`${" ".repeat(offset)}${tree.data}`);
            if (!tree.left && tree.right) {
                console.log(`${" ".repeat(offset + OFFSET)}null`);
            }
            else {
                printR(tree.left, offset + OFFSET);
            }
            printR(tree.right, offset + OFFSET);
        };
        printR(this.root, 0);
    }
}
exports.default = BinaryTree;
//# sourceMappingURL=BinaryTree.js.map