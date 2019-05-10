/**
 * @file implementation of AVL tree
 * @author arlenyang
 */

import BinaryTree from "./BinaryTree"
import Node from "./AVLTreeNode"

export default class AVLTree extends BinaryTree {
    constructor() {
        super();
    }

    public build(arr: number[]): void {
        arr.map(n => {
            this.insert(n);
        })
    }

    public insert(val: number): void {
        this.root = this.insertR(val, this.root);
    }

    private insertR(val: number, tree: Node): Node {
        if (tree == null) {
            
        }
    }

    private singleRotateWithLeft(tree: Node): Node {

    }

    private singleRotateWithRight(tree: Node): Node {

    }

    private doubleRotateWithLeft(tree: Node): Node {

    }

    private doubleRotateWithRight(tree: Node): Node {

    }
}