/**
 * @file avl tree node, which has a extend attr of height
 * @author arlenyang
 */

import BinaryTreeNodeSuperClass from "./BinaryTreeNodeSuperclass"

export default class AVLTreeNode {
    height: number;
    left: AVLTreeNode;
    right: AVLTreeNode;
    data: any;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}