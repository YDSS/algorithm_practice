/**
 * @file implementation of AVL tree
 * @author arlenyang
 */
import Node from "./AVLTreeNode";
export default class AVLTree {
    root: Node;
    constructor();
    build(arr: number[]): void;
    insert(val: number): void;
    private insertR;
    private singleRotateWithLeft;
    private singleRotateWithRight;
    private doubleRotateWithLeft;
    private doubleRotateWithRight;
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
