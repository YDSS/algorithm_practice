/**
 * @file test case
 * @author YDSS
 *
 * Created on Mon Apr 16 2018
 */

const { BinaryTree, BinaryTreeNode } = require('./BinaryTree');
const { expect } = require('chai');

// test('preOrder', () => {
//     let root = BinaryTree.mock();
//     BinaryTree.preOrder(root);
// });

// test('inOrder', () => {
//     let root = BinaryTree.mock();
//     BinaryTree.inOrder(root);
// });

// test('postOrder', () => {
//     let root = BinaryTree.mock();
//     BinaryTree.postOrder(root);
// });

test('translevel', () => {
    let root = BinaryTree.mock();
    BinaryTree.translevel(root, node => {
        console.log(node.data);
    });
})