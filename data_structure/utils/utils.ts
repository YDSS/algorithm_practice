import TreeNode from "../tree_ts/BinaryTreeNode";

export function fullBinaryTreeArrayToTree(arr: Array<number>): TreeNode {
    // key is index of treenode in the arr, value is the treenode object
    let treeNodeMap: Array<TreeNode> = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            continue;
        }
        if (!treeNodeMap[i]) {
            treeNodeMap[i] = new TreeNode(arr[i]);
        }
        // find its children
        let left = 2 * i + 1;
        if (arr[left] != null) {
            if (!treeNodeMap[left]) {
                treeNodeMap[left] = new TreeNode(arr[left]);
            }
            treeNodeMap[i].left = treeNodeMap[left];
        }
        let right = 2 * i + 2;
        if (arr[right] != null) {
            if (!treeNodeMap[right]) {
                treeNodeMap[right] = new TreeNode(arr[right]);
            }
            treeNodeMap[i].right = treeNodeMap[right];
        }
    }

    return treeNodeMap[0]; // root
}

export function printBinaryTree(root, attrs?) {
    const OFFSET = 4;
    let printR = (node, offset) => {
        if (node == null) {
            return;
        }

        console.log(
            " ".repeat(offset) +
                node.data +
                (attrs ? `(${attrs.map(attr => node[attr]).join(",")})` : "")
        );
        if (!node.left && node.right) {
            console.log(`${" ".repeat(offset + OFFSET)}null`);
        } else {
            printR(node.left, offset + OFFSET);
        }
        printR(node.right, OFFSET + offset);
    };

    printR(root, 0);
};