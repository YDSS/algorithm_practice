/**
 * @file implementation of binary search tree
 * @author arlenyang
 */

import Node from "./BinaryTreeNode";
import { binarySearchTreeNodes } from "./mock/binaryTree"

export default class BinarySearchTree {
    public root: Node;

    constructor() {
        this.root = null;
    }

    public build(nodes: number[]) {
        nodes.map(node => {
            this.insert(node);
        }) 
    }

    public insert(val: number): void {
        let insertR = (val: number, tree: Node) => {
            if (tree == null) {
                return new Node(val);
            }

            if (val < tree.data) {
                tree.left = insertR(val, tree.left);
            }
            if (val > tree.data) {
                tree.right = insertR(val, tree.right);
            }

            return tree;
        }

        this.root = insertR(val, this.root);
    }

    public find(val: number): Node {
        let findR = (val: number, tree: Node): Node => {
            if (tree == null) {
                return null;
            }
            if (val === tree.data) {
                return tree;
            }
            if (val > tree.data) {
                return findR(val, tree.right);
            }
            if (val < tree.data) {
                return findR(val, tree.left);
            }
        }

        return findR(val, this.root);
    }

    public delete(val: number): Node {
        let deleted = this.find(val);
        if (deleted == null) {
            return null;
        }

        if (deleted.left != null && deleted.right != null) {
            let successor = this.findSuccessor(deleted);
            
        }
    }

    private findSuccessor(node: Node) {

    }

    public print() {
        const OFFSET = 4;
        let printR = (tree, offset) => {
            if (tree == null) {
                return;
            }

            console.log(`${" ".repeat(offset)}${tree.data}`);
            printR(tree.left, offset + OFFSET); 
            printR(tree.right, offset + OFFSET); 
        }

        printR(this.root, 0);
    }
}

let bsTree = new BinarySearchTree();
bsTree.build(binarySearchTreeNodes);
bsTree.print();
console.log(bsTree.find(2));
console.log(bsTree.find(10));