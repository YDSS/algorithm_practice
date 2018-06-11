const space = " ";
const LEVEL_OFFSET = 4;

function printBinaryTreeCrosswise(root, offset) {
    if (root != null) {
        console.log(space.repeat(offset), root.data);

        if (root.lchild) {
            printBinaryTreeCrosswise(root.lchild, offset + LEVEL_OFFSET);
        } else {
            root.rchild && printEmptyChild(offset + LEVEL_OFFSET);
        }
        if (root.rchild) {
            printBinaryTreeCrosswise(root.rchild, offset + LEVEL_OFFSET);
        }
    }
}
exports.printBinaryTreeCrosswise = printBinaryTreeCrosswise;

function printRedBlackTreeCrosswise(root, offset) {
    if (!isRedBlackNullNode(root)) {
        console.log(space.repeat(offset), root.data, `(${root.color})`);

        if (!isRedBlackNullNode(root.lchild)) {
            printRedBlackTreeCrosswise(root.lchild, offset + LEVEL_OFFSET);
        } else {
            !isRedBlackNullNode(root.rchild) && printEmptyChild(offset + LEVEL_OFFSET);
        }
        if (!isRedBlackNullNode(root.rchild)) {
            printRedBlackTreeCrosswise(root.rchild, offset + LEVEL_OFFSET);
        }
    }
}
exports.printRedBlackTreeCrosswise = printRedBlackTreeCrosswise;

function printEmptyChild(offset) {
    console.log(space.repeat(offset), "-");
}

function isRedBlackNullNode(node) {
    if (node.type && node.type === 'null') {
        return true;
    }
    return false;
}

function printBinaryTreeLengthwise(root) {}
