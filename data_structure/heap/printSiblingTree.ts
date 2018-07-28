import SiblingTreeNode from './SiblingTreeNode';

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
        let a = new SiblingTreeNode();
        a.data = 1; 
        let b = new SiblingTreeNode();
        b.data = 2; 
        let c = new SiblingTreeNode();
        c.data = 3; 
        let d = new SiblingTreeNode();
        d.data = 4; 
        let e = new SiblingTreeNode();
        e.data = 5; 
        let f = new SiblingTreeNode();
        f.data = 6; 

        a.leftChild = b;
        b.nextSibling = c;
        c.nextSibling = d;
        b.leftChild = e
        e.nextSibling = f;

        return a;
    }
}

new PrintSiblingTree().testPrint();