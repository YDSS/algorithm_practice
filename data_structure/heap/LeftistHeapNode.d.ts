export default class LeftistHeapNode {
    constructor(data: any);
    /**
     * null path length of the node
     */
    npl: number;
    /**
     * left child of the node
     */
    lchild: LeftistHeapNode;
    /**
     * right child of the node
     */
    rchild: LeftistHeapNode;
    /**
     * data that node carries
     */
    data: any;
}
