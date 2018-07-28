"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SiblingTreeNode_1 = require("./SiblingTreeNode");
class PrintSiblingTree {
    testPrint() {
        let root = this.mock();
        this._print(root, 0);
    }
    _print(node, offset) {
        if (!node) {
            return;
        }
        console.log(" ".repeat(offset), node.data);
        if (node.leftChild) {
            this._print(node.leftChild, offset + 4);
        }
        if (node.nextSibling) {
            this._print(node.nextSibling, offset);
        }
    }
    mock() {
        let a = new SiblingTreeNode_1.default();
        a.data = 1;
        let b = new SiblingTreeNode_1.default();
        b.data = 2;
        let c = new SiblingTreeNode_1.default();
        c.data = 3;
        let d = new SiblingTreeNode_1.default();
        d.data = 4;
        let e = new SiblingTreeNode_1.default();
        e.data = 5;
        let f = new SiblingTreeNode_1.default();
        f.data = 6;
        a.leftChild = b;
        b.nextSibling = c;
        c.nextSibling = d;
        b.leftChild = e;
        e.nextSibling = f;
        return a;
    }
}
new PrintSiblingTree().testPrint();
//# sourceMappingURL=printSiblingTree.js.map