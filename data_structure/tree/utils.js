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
    if (root != null) {
        console.log(space.repeat(offset), root.data, `(${root.color})`);

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
exports.printRedBlackTreeCrosswise = printRedBlackTreeCrosswise;

function printEmptyChild(offset) {
    console.log(space.repeat(offset), "-");
}

function printBinaryTreeLengthwise(root) {}
