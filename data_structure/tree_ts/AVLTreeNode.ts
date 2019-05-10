/**
 * @file avl tree node, which has a extend attr of height
 * @author arlenyang
 */

import BinaryTreeNodeSuperClass from "./BinaryTreeNodeSuperclass"

export default class AVLTreeNode extends BinaryTreeNodeSuperClass {
    height: number;

    constructor(data) {
        super(data);
        this.height = 0;
    }
}