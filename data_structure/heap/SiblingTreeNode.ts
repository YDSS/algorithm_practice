/**
 * @file implementation of tree node that has a first child and it's next sibling node
 * @author YDSS
 *
 * Created on Mon Jul 23 2018
 */

export default class SiblingTreeNode {
    /**
     * data that the node carries
     */
    data: any;
    leftChild: SiblingTreeNode;
    nextSibling: SiblingTreeNode;
}