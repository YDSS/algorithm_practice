class RedBlackTreeNode {
    constructor(data, color, lchild, rchild) {
        // validate color
        if (!Color[color]) {
            throw new Error(`color can only be RED or BLACK`);
        } 

        this.color = color;
        this.data = data;
        this.lchild = lchild;
        this.rchild = rchild; 
    } 
}

const Color = {
    "RED": "RED",
    "BLACK": "BLACK"
};

module.exports = {
    RedBlackTreeNode,
    Color,
};