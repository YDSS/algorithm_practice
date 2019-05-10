/**
 * @file avl tree node, which has a extend attr of height
 * @author arlenyang
 */

import BinaryTreeNode from "./BinaryTreeNode"

export default class AVLTreeNode extends BinaryTreeNode {
    height: number;

    constructor(data) {
        super(data);
        this.height = 0;
    }
}