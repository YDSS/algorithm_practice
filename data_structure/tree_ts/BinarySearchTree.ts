/**
 * @file implementation of binary search tree
 * @author arlenyang
 */

import Node from "./BinaryTreeNodeSuperclass";
import BinaryTree from "./BinaryTree";
import { binarySearchTreeNodes } from "./mock/binaryTree";

export default class BinarySearchTree extends BinaryTree {
    public root: Node;

    constructor() {
        super();
    }

    public build(nodes: number[]) {
        nodes.map(node => {
            this.insert(node);
        });
    }

    public insert(val: number): void {
        this.root = this.insertR(val, this.root);
    }

    private insertR(val: number, tree: Node) {
        if (tree == null) {
            return new Node(val);
        }

        if (val < tree.data) {
            tree.left = this.insertR(val, tree.left);
        }
        if (val > tree.data) {
            tree.right = this.insertR(val, tree.right);
        }

        return tree;
    }

    public find(val: number): Node {
        return this.findR(val, this.root);
    }

    private findR(val: number, tree: Node): Node | null {
        if (tree == null) {
            return null;
        }
        if (val === tree.data) {
            return tree;
        }
        if (val > tree.data) {
            return this.findR(val, tree.right);
        }
        if (val < tree.data) {
            return this.findR(val, tree.left);
        }
    }

    private findRWithParent(
        val: number,
        tree: Node,
        parent: Node
    ): { node: Node; parent: Node } | null {
        if (tree == null) {
            return null;
        }
        if (val === tree.data) {
            return {
                node: tree,
                parent
            };
        }
        if (val > tree.data) {
            return this.findRWithParent(val, tree.right, tree);
        }
        if (val < tree.data) {
            return this.findRWithParent(val, tree.left, tree);
        }
    }

    public delete(val: number): Node {
        // find delete node
        let tmp = this.findRWithParent(val, this.root, null);
        let deleted = tmp.node;
        let deletedParent = tmp.parent;

        let deleteNodeWithAtMostOneChild = (node, parent) => {
            if (node.left == null) {
                if (node.data > parent.data) {
                    parent.right = node.right;
                } else {
                    parent.left = node.right;
                }

                node.right = null;
            } else if (node.right == null) {
                if (node.data > parent.data) {
                    parent.right = node.left;
                } else {
                    parent.left = node.left;
                }

                node.left = null;
            }
            // deleted node has no child
            else {
                if (node.data > parent.data) {
                    parent.right = null;
                } else {
                    parent.left = null;
                }
            }
        };

        // not found the val
        if (deleted == null) {
            return null;
        }
        // deleted node at most has one child
        if (deleted.left == null || deleted.right == null) {
            deleteNodeWithAtMostOneChild(deleted, deletedParent);
            return deleted;
        }
        // deleted node has two children
        else {
            tmp = this.findSuccessor(deleted, deletedParent);
            let successor = tmp.node;
            let successorParent = tmp.parent;
            let successorVal = successor.data;
            let tmpVal = deleted.data;
            // delete successor, and copy val of successor
            deleteNodeWithAtMostOneChild(successor, successorParent);
            deleted.data = successorVal;

            // restore deleted val
            successor.data = tmpVal;
            return successor;
        }
    }

    private findSuccessor(node: Node, parent: Node) {
        let { right } = node;
        let findMinNode = (tree, parent) => {
            if (tree.left == null) {
                return {
                    node: tree,
                    parent
                };
            }
            return findMinNode(tree.left, tree);
        };

        return findMinNode(right, node);
    }
}

let bsTree = new BinarySearchTree();
bsTree.build(binarySearchTreeNodes);
bsTree.print(4);
// find node
// console.log('find 2')
// console.log(bsTree.find(2));

// delete a node
// console.log("delete 6");
// console.log(bsTree.delete(6));
// bsTree.print(4);

// height
console.log('height of the tree is:')
console.log(bsTree.calcHeight(bsTree.root.left));