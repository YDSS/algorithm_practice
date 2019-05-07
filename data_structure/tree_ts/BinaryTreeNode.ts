/**
 * @file binary tree node
 * @author arlenyang
 */

export default class BinaryTreeNode {
    data: any;
    left: BinaryTreeNode;
    right: BinaryTreeNode;
    
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}