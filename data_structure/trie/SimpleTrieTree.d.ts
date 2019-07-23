/**
 * @file trie tree node, the char set is a-z, and the children of node is an array with 26 elements, every index represents a char,and the value is a pointer pointing a child
 * @author arlenyang
 */
export declare class SimpleTrieTreeNode {
    data: any;
    isEnd: boolean;
    children: SimpleTrieTreeNode[];
    constructor(data?: any);
}
export declare class SimpleTrieTree {
    root: SimpleTrieTreeNode;
    constructor(strs?: string[]);
    private build;
    /**
     * insert a string into tree
     * @param str
     */
    insert(str: string): void;
    insertR(str: string, parent: SimpleTrieTreeNode): void;
    /**
     * find the str in the tree, return if it's in the tree or not
     * @param str str need find in the tree
     */
    find(str: string): boolean;
    findR(str: string, parent: SimpleTrieTreeNode): boolean;
    /**
     * delete a string in the tree
     * @param str the string need to be deleted
     */
    delete(str: string): void;
    /**
     * print the tree
     * @param OFFSET offset between parent node and child node when print
     */
    print(): void;
}
