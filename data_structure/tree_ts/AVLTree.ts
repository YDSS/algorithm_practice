/**
 * @file implementation of AVL tree
 * @author arlenyang
 */

import { avlTreeNodes } from "./mock/binaryTree"

import Node from "./AVLTreeNode";

export default class AVLTree {
    root: Node;

    constructor() {}

    public build(arr: number[]): void {
        arr.map(n => {
            this.insert(n);
        });
    }

    public insert(val: number): void {
        this.root = this.insertR(val, this.root);
    }

    private insertR(val: number, tree: Node): Node {
        if (tree == null) {
            return new Node(val);
        }

        // insert new node into the left subtree
        if (val < tree.data) {
            tree.left = this.insertR(val, tree.left);
            // the tree is unbalance after inserting new node into the
            // left subtree
            let rightHeight = tree.right ? tree.right.height : -1;
            if (tree.left.height - rightHeight === 2) {
                if (val < tree.left.data) {
                    tree = this.singleRotateWithLeft(tree);
                } else {
                    tree = this.doubleRotateWithLeft(tree);
                }
            }
        }
        // insert new node into the right subtree
        else if (val > tree.data) {
            tree.right = this.insertR(val, tree.right);
            // the tree is unbalance after inserting new node into the
            // right subtree
            let leftHeight = tree.left ? tree.left.height : -1;
            if (tree.right.height - leftHeight === 2) {
                if (val > tree.right.data) {
                    tree = this.singleRotateWithRight(tree);
                } else {
                    tree = this.doubleRotateWithRight(tree);
                }
            }
        }
        // update height
        let leftHeight = tree.left ? tree.left.height : -1;
        let rightHeight = tree.right ? tree.right.height : -1;
        tree.height = Math.max(leftHeight, rightHeight) + 1;

        return tree;
    }

    private singleRotateWithLeft(tree: Node): Node {
        let k2 = tree.left;
        tree.left = k2.right;
        k2.right = tree;

        tree.height -= 1;

        return k2;
    }

    private singleRotateWithRight(tree: Node): Node {
        let k2 = tree.right;
        tree.right = k2.left;
        k2.left = tree;

        tree.height -= 1;

        return k2;
    }

    private doubleRotateWithLeft(tree: Node): Node {
        tree.left = this.singleRotateWithRight(tree.left);
        let k2 = this.singleRotateWithLeft(tree);

        return k2;
    }

    private doubleRotateWithRight(tree: Node): Node {
        tree.right = this.singleRotateWithLeft(tree.right);
        let k2 = this.singleRotateWithRight(tree);

        return k2;
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

            console.log(`${" ".repeat(offset)}${tree.data}(${tree.height})`);
            if (!tree.left && tree.right) {
                console.log(`${" ".repeat(offset + OFFSET)}null`);
            }
            else {
                printR(tree.left, offset + OFFSET) 
            }
            printR(tree.right, offset + OFFSET);
        };

        printR(this.root, 0);
    }
}

let avlTree = new AVLTree();
avlTree.build(avlTreeNodes);
avlTree.print(4);