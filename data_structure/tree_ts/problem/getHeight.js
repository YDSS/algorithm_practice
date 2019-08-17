"use strict";
/**
 * @file get height of one tree node
 * @author arlenyang
 */
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils/utils");
/**
 * post order way
 * @param root
 */
function getHeight(root) {
    if (root == null) {
        return -1;
    }
    let leftH = getHeight(root.left);
    let rightH = getHeight(root.right);
    return Math.max(leftH, rightH) + 1;
}
/**
 * dfs way
 * @param root
 */
function getHeight2(root) {
    let max = -1;
    let dfs = (root, curH) => {
        if (root == null) {
            if (curH > max) {
                max = curH;
            }
            return;
        }
        dfs(root.left, curH + 1);
        dfs(root.right, curH + 1);
    };
    dfs(root, max);
    return max;
}
// let arr = [1,2,3,4,5,null,null,null,null,6];
let arr = [1, 2, 3, 4, 5];
let root = utils_1.fullBinaryTreeArrayToTree(arr);
utils_1.printBinaryTree(root);
console.log(getHeight2(root));
//# sourceMappingURL=getHeight.js.map