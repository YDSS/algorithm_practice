"use strict";
/**
 * @file implementation of binary search tree
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeNode_1 = require("./BinaryTreeNode");
const binaryTree_1 = require("./mock/binaryTree");
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    build(nodes) {
        nodes.map(node => {
            this.insert(node);
        });
    }
    insert(val) {
        let insertR = (val, tree) => {
            if (tree == null) {
                return new BinaryTreeNode_1.default(val);
            }
            if (val < tree.data) {
                tree.left = insertR(val, tree.left);
            }
            if (val > tree.data) {
                tree.right = insertR(val, tree.right);
            }
            return tree;
        };
        this.root = insertR(val, this.root);
    }
    find(val) {
        let findR = (val, tree) => {
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
        };
        return findR(val, this.root);
    }
    delete(val) {
    }
    findSuccessor(val) {
    }
    print() {
        const OFFSET = 4;
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
exports.default = BinarySearchTree;
let bsTree = new BinarySearchTree();
bsTree.build(binaryTree_1.binarySearchTreeNodes);
bsTree.print();
console.log(bsTree.find(2));
console.log(bsTree.find(10));
//# sourceMappingURL=BinarySearchTree.js.map