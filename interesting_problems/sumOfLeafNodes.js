/**
 * @file get sum of all leaf nodes in a n-ary tree in O(1) space, can not use recursion or call stack
 * @author arlenyang
 */

const { arrayToNaryTree, printNaryTree } = require('../leetcode/util/utils')

function TreeNode(val) {
    this.val = val;
    this.next = null; // the next node pointer
    this.children = [];
}

/**
 * BFS, utilzing next pointer instead of queue in BFS
 * @param {TreeNode} root
 */
function sumOfLeafNodes(root) {
    let sum = 0;
    let node = (tail = root);
    while (node) {
        if (node.children.length) {
            node.children.map(child => {
                tail.next = child;
                tail = tail.next;
            });
        } else {
            sum++;
        }
        node = node.next;
    }

    return sum;
}

let arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    null,
    null,
    "F",
    "G",
    null,
    null,
    null,
    "M",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "H"
];
let n = 3;
let root = arrayToNaryTree(arr, n, TreeNode);
printNaryTree(root, n);
console.log(sumOfLeafNodes(root))