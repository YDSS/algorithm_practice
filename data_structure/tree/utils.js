const space = " ";
const LEVEL_OFFSET = 4;

/**
 * print a binary tree
 * @param {BinaryTreeNode} root 
 * @param {Number} offset 
 * @param {Function} cb given the tree node in current traverse, 
 *  need return a string which will print next to the data
 */
function printBinaryTreeCrosswise(root, offset, cb) {
    if (root != null) {
        let extra = '';
        if (cb) {
            extra = cb(root);
        }
        console.log(space.repeat(offset), root.data, extra);

        if (root.lchild) {
            printBinaryTreeCrosswise(root.lchild, offset + LEVEL_OFFSET, cb);
        } else {
            root.rchild && printEmptyChild(offset + LEVEL_OFFSET);
        }
        if (root.rchild) {
            printBinaryTreeCrosswise(root.rchild, offset + LEVEL_OFFSET, cb);
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
            !isRedBlackNullNode(root.rchild) &&
                printEmptyChild(offset + LEVEL_OFFSET);
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
    if (node.type && node.type === "null") {
        return true;
    }
    return false;
}

function printBinaryTreeLengthwise(root) {}

/**
 * print a tree that it's nodes connecting by sibling pointer
 */
function printSiblingTree(root, offset) {
    if (!root) {
        return;
    }

    console.log(" ".repeat(offset), root.data);

    if (root.leftChild) {
        printSiblingTree(root.leftChild, offset + 4);
    }

    if (root.nextSibling) {
        printSiblingTree(root.nextSibling, offset);
    }
}
exports.printSiblingTree = printSiblingTree;
