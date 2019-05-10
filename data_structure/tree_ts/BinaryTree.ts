/**
 * @file binary tree, super class
 * @author arlenayng
 */

import Node from "./BinaryTreeNodeSuperclass";

export default class BinaryTree {
    root: Node;

    constructor() {
        this.root = null;
    }

    /**
     * calculate the height of tree
     * @param tree 
     * 
     * @return {number}
     */
    public calcHeight(tree: Node): number {
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
    public isLeaf(node: Node): boolean {
        return node.left == null && node.right == null;
    }

    /**
     * print the tree
     * @param OFFSET offset between parent node and child node when print
     */
    public print(OFFSET: number): void {
        let printR = (tree, offset) => {
            if (tree == null) {
                return;
            }

            console.log(`${" ".repeat(offset)}${tree.data}`);
            printR(tree.left, offset + OFFSET);
            printR(tree.right, offset + OFFSET);
        };

        printR(this.root, 0);
    }
}