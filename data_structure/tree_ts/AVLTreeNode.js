"use strict";
/**
 * @file avl tree node, which has a extend attr of height
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AVLTreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}
exports.default = AVLTreeNode;
//# sourceMappingURL=AVLTreeNode.js.map