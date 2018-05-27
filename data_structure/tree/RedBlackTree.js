/**
 * @file implementation of red black tree
 * @author YDSS
 *
 * Created on Sun May 27 2018
 */

const { RedBlackTreeNode, Color } = require("./RedBlackTreeNode");

class RedBlackTree {
    constructor(arr) {
        this._initialize();
        this.create(arr);
    }

    _initialize() {
        // init NullNode
        this.NullNode = new RedBlackTreeNode(
            Number.NEGATIVE_INFINITY,
            Color.BLACK,
            null,
            null
        );
        this.NullNode.lchild = this.NullNode;
        this.NullNode.rchild = this.NullNode;
        // extra attr for recognizing the NullNode
        this.NullNode.type = "null";
        // init header
        this.header = new RedBlackTreeNode(
            Number.NEGATIVE_INFINITY,
            Color.BLACK,
            this.NullNode,
            this.NullNode
        );
        // init nodes to store parent, grandparent and grandgrandparent
        this.X = null;
        this.P = null;
        this.GP = null;
        this.GGP = null;
    }

    create(arr) {
        arr.forEach(item => {
            this.header = this.insert(item);
        });
    }

    insert(data) {
        this.X = this.P = this.GP = this.GGP = this.header;

        this.NullNode.data = data;
        while (data !== this.X.data) {
            this.GGP = this.GP;
            this.GP = this.P;
            this.P = this.X;

            if (data < this.X.data) {
                this.X = this.X.lchild;
            } else {
                this.X = this.X.rchild;
            }
            if (
                this.X.lchild.color === Color.RED &&
                this.X.rchild.color === Color.RED
            )
                this._handleReorient(data);
        }

        // duplicate
        if (this.X !== this.NullNode) {
            return this.NullNode;
        }

        this.X = new RedBlackTreeNode(
            data,
            Color.RED,
            this.NullNode,
            this.NullNode
        );
        if (data < this.P.data) {
            this.P.lchild = this.X;
        } else {
            this.P.rchild = this.X;
        }
        this._handleReorient(data);

        return this.header;
    }

    _handleReorient(data) {
        this.X.color = Color.RED;
        this.X.lchild.color = Color.BLACK;
        this.X.rchild.color = Color.BLACK;

        if (this.P.color === Color.RED) {
            this.GP.color = Color.RED;

            if (data < this.GP.data !== data < this.P.data)
                this.P = this._rotate(data, this.GP);
            this.X = this._rotate(data, this.GGP);
            this.X.color = Color.BLACK;
        }
        this.header.rchild.color = Color.BLACK;
    }

    /**
     * single rotate
     *
     * @param {*} data
     * @param {RedBlackTreeNode} Parent Parent Node of the subtree will rotate
     */
    _rotate(data, Parent) {
        if (data < Parent.data) {
            return (Parent.lchild =
                data < Parent.lchild.data
                    ? this._singleRotateWithLeft(Parent.lchild)
                    : this._singleRotateWithRight(Parent.lchild));
        } else {
            return (Parent.rchild =
                data > Parent.rchild.data
                    ? this._singleRotateWithRight(Parent.rchild)
                    : this._singleRotateWithLeft(Parent.rchild));
        }
    }

    _singleRotateWithLeft(T) {
        let root = T.lchild;

        T.lchild = root.rchild;
        root.rchild = T;

        return root;
    }

    _singleRotateWithRight(T) {
        let root = T.rchild;

        T.rchild = root.lchild;
        root.lchild = T;

        return root;
    }
}

module.exports = RedBlackTree;
