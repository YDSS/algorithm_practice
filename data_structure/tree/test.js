/**
 * @file test case
 * @author YDSS
 *
 * Created on Mon Apr 16 2018
 */

const BinaryTree = require("./BinaryTree");
const BinaryTreeNode = require("./BinaryTreeNode");
const BinarySearchTree = require("./BinarySearchTree");
const AVLTree = require("./AVLTree")
const RedBlackTree = require('./RedBlackTree');

const { expect } = require("chai");
const { printBinaryTreeCrosswise, printRedBlackTreeCrosswise } = require("./utils");

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

// test('translevel', () => {
// let root = BinaryTree.mock();
// BinaryTree.translevel(root, node => {
//     console.log(node.data);
// });
// })

main();

function main() {
    // testBinaryTree();
    testBinarySearchTree();
    // testAVLTree();
    // testRedBlackTree();
}

function testRedBlackTree() {
    let arr = [5, 10, 15, 20, 30, 70, 60, 50, 40, 55, 65, 85, 80, 90];
    // let arr = [5, 10, 15, 20, 30, 70, 60, 50];
    let rdt = new RedBlackTree(arr);
    // console.log(rdt.header)
    printRedBlackTreeCrosswise(rdt.header.rchild, 0);    
    rdt.insert(86);
    printRedBlackTreeCrosswise(rdt.header.rchild, 0);    
}

function testAVLTree() {
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr = [11, 2, 5, 8, 29, 6, 4, 10, 7];
    let avlTree = new AVLTree(arr);
    // printBinaryTreeCrosswise(avlTree.root, 0);
    // console.log('insert 11');
    // avlTree.insert(new BinaryTreeNode(11, null, null));
    printBinaryTreeCrosswise(avlTree.root, 0);
    console.log('find 6 ', avlTree.find(6));
}

function testBinarySearchTree() {
    let arr = [11, 2, 1, 5, 8, 29, 6, 10, 7];
    let bst = new BinarySearchTree(arr);
    // printBinaryTreeCrosswise(bst.root, 0);
    // console.log('insert 15');
    // bst.insert(new BinaryTreeNode(15, null, null));
    // printBinaryTreeCrosswise(bst.root, 0);
    // console.log('insert 18');
    // bst.insert(new BinaryTreeNode(18, null, null));
    printBinaryTreeCrosswise(bst.root, 0);
    // console.log('find 6 ', bst.find(6));
    // let node = bst.find(2);
    // console.log(bst.findSuccessor(node));
    bst.delete(6);
    printBinaryTreeCrosswise(bst.root, 0);
}

function testBinaryTree() {
    let root = BinaryTree.mock();
    printBinaryTreeCrosswise(root, 0);
    console.log()
}
