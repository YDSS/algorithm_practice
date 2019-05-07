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
    find(val: number): Node;
    delete(val: number): void;
    private findSuccessor;
    print(): void;
}
