/**
 * @file implementation of binary search tree
 * @author arlenyang
 */
import Node from "./BinaryTreeNode";
export default class BinarySearchTree {
    root: Node;
    constructor();
    build(nodes: number[]): void;
    insert(val: number): void;
    private insertR;
    find(val: number): Node;
    private findR;
    private findRWithParent;
    delete(val: number): Node;
    private findSuccessor;
    print(): void;
}
