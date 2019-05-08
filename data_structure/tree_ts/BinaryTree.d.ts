/**
 * @file binary tree, super class
 * @author arlenayng
 */
import Node from "./BinaryTreeNode";
export default class BinaryTree {
    root: Node;
    constructor();
    /**
     * calculate the height of tree
     * @param tree
     *
     * @return {number}
     */
    calcHeight(tree: Node): number;
    /**
     * determining whether the node is a leaf
     * @param node
     */
    isLeaf(node: Node): boolean;
    /**
     * print the tree
     * @param OFFSET offset between parent node and child node when print
     */
    print(OFFSET: number): void;
}
