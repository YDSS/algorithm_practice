import SiblingTreeNode from './SiblingTreeNode';

class PrintSiblingTree {
    print() {
        
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

        a.leftChild = d;
        a.nextSibling = b;
        b.nextSibling = c;
    }
}